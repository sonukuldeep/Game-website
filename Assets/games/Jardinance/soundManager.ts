// const soundsArray: HTMLAudioElement[] = [
//     new Audio("/assets/sound effects/bubble1.wav"),
//     new Audio("/assets/sound effects/bubble2.wav"),
//     new Audio("/assets/sound effects/bubble3.wav"),
//     new Audio("/assets/sound effects/ball-on-platform1.wav"),
//     new Audio("/assets/sound effects/ball-on-platform2.wav"),
//     new Audio("/assets/sound effects/explosion1.wav"),
//     new Audio("/assets/sound effects/explosion2.wav"),
//     new Audio("/assets/sound effects/explosion3.wav"),
// ]

const soundsArray: string[] = [
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/images/characters.png/assets/sound_effects/bubble1.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/images/characters.png/assets/sound_effects/bubble2.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/images/characters.png/assets/sound_effects/bubble3.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/images/characters.png/assets/sound_effects/ball-on-platform1.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/images/characters.png/assets/sound_effects/ball-on-platform2.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/images/characters.png/assets/sound_effects/explosion1.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/images/characters.png/assets/sound_effects/explosion2.wav",
    "https://weirdgames.netlify.app/assets/games/jardinance/assets/images/characters.png/assets/sound_effects/explosion3.wav",
]
export const soundsArrayLength = soundsArray.length

export function SoundEffect(sound: number) {
    // const soundEffect = soundsArray[sound]
    // @ts-ignore
    const soundEffect = new Howl({ src: [soundsArray[sound]] });
    // soundEffect.play()
    soundEffect.play()
}