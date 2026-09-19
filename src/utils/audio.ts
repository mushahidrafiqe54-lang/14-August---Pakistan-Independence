// Web Audio API synthesizer for the iconic Pakistani National Anthem melody
// "Pak Sarzameen Shaad Baad, Kishwar-e-Haseen Shaad Baad..."
// Works in all browsers without external assets, zero lag, reliable.

class AnthemPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerIds: number[] = [];
  private onStateChangeListeners: ((playing: boolean) => void)[] = [];

  // Musical notes for the first iconic lines of Qaumi Taranah
  private melodyNotes: { note: number; duration: number }[] = [
    // Pak Sarzameen Shaad Baad
    { note: 261.63, duration: 0.6 }, // C4
    { note: 329.63, duration: 0.6 }, // E4
    { note: 392.00, duration: 0.8 }, // G4
    { note: 523.25, duration: 1.0 }, // C5
    { note: 493.88, duration: 0.5 }, // B4
    { note: 440.00, duration: 0.5 }, // A4
    { note: 392.00, duration: 1.2 }, // G4
    
    // Kishwar-e-Haseen Shaad Baad
    { note: 349.23, duration: 0.6 }, // F4
    { note: 392.00, duration: 0.6 }, // G4
    { note: 440.00, duration: 0.8 }, // A4
    { note: 392.00, duration: 0.6 }, // G4
    { note: 349.23, duration: 0.6 }, // F4
    { note: 329.63, duration: 1.2 }, // E4

    // Tu Nishan-e-Azm-e-Aali Shaan
    { note: 261.63, duration: 0.5 }, // C4
    { note: 293.66, duration: 0.5 }, // D4
    { note: 329.63, duration: 0.6 }, // E4
    { note: 349.23, duration: 0.6 }, // F4
    { note: 392.00, duration: 0.8 }, // G4
    { note: 523.25, duration: 1.2 }, // C5

    // Arz-e-Pakistan!
    { note: 440.00, duration: 0.6 }, // A4
    { note: 493.88, duration: 0.6 }, // B4
    { note: 523.25, duration: 1.5 }, // C5
  ];

  public onStateChange(listener: (playing: boolean) => void) {
    this.onStateChangeListeners.push(listener);
    return () => {
      this.onStateChangeListeners = this.onStateChangeListeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.onStateChangeListeners.forEach(fn => fn(this.isPlaying));
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public play() {
    this.stop();
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.ctx || this.ctx.state === 'closed') {
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.isPlaying = true;
      this.notify();

      let startTime = this.ctx.currentTime + 0.1;
      let totalDuration = 0;

      this.melodyNotes.forEach(item => {
        const noteStart = startTime + totalDuration;
        totalDuration += item.duration;

        // Schedule tone
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        // Warm brass/flute character
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.note, noteStart);

        // Subtle vibrato
        gain.gain.setValueAtTime(0, noteStart);
        gain.gain.linearRampToValueAtTime(0.18, noteStart + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + item.duration - 0.04);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(noteStart);
        osc.stop(noteStart + item.duration);
      });

      // Schedule loop
      const tid = window.setTimeout(() => {
        if (this.isPlaying) {
          this.play();
        }
      }, (totalDuration + 0.8) * 1000);
      this.timerIds.push(tid);

    } catch (e) {
      console.error('Audio playback error', e);
      this.isPlaying = false;
      this.notify();
    }
  }

  public stop() {
    this.isPlaying = false;
    this.timerIds.forEach(id => clearTimeout(id));
    this.timerIds = [];
    if (this.ctx && this.ctx.state !== 'closed') {
      try {
        this.ctx.suspend();
      } catch {
        // ignore
      }
    }
    this.notify();
  }
}

export const anthemPlayer = new AnthemPlayer();
