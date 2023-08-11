const soundsArray = [
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/sound_effects/bubble1.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/sound_effects/bubble2.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/sound_effects/bubble3.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/sound_effects/ball-on-platform1.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/sound_effects/ball-on-platform2.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/sound_effects/explosion1.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/sound_effects/explosion2.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/sound_effects/explosion3.wav",
];
export const soundsArrayLength = soundsArray.length;
export function SoundEffect(sound) {
    const soundEffect = new Howl({ src: [soundsArray[sound]] });
    soundEffect.play();
}
