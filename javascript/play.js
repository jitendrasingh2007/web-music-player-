function quitmusic() {
  audio.pause();
  audio.currentTime = 0;
}

document.getElementById("DilSambhalJaZara").addEventListener("click", () => {
  if (audio != null) {
    quitmusic();
  }
  playsystem(
    "music/Dil Sambhal Ja Zara ｜ LYRICS ｜ Arijit  Singh, Mohammad Irfan Ali, Saim Bhat [0rWwuUASfIQ].opus",
    "Dil Sambhal Ja Zara !",
    "musicimage/arijit-singh-copy_ddzh.1248.webp",
    "LYRICS Arijit  Singh, Mohammad Irfan Ali"
  );
});
// async function h() {
  
   document.getElementById("Harkisiko").addEventListener("click", async () => {
    if (audio != null) {
      quitmusic();
    }
    playsystem(
      "music/Har Kisi Ko ｜ [ Slowed+Reverb ] ｜ Boss ｜ Arijit Singh & Neeti Mohan ｜ LOFI WALA [LmutL0qyN7U].opus",
      "Har kisi ko....",
      "musicimage/maxresdefault.jpg",
      "Arijit Singh & Neeti Mohan"
  
    );
     
  });
  
// }
// h()

document.getElementById("mujhko-barsat-bana-lo").addEventListener("click", () => {
  if (audio != null) {
    quitmusic();
  }
  playsystem(
    "music/Mujhko Barsaat Bana Lo (Slowed-Reverb) ｜ Mujhko Barsaat Bana Lo - Armaan Maalik [DTlvLF7smAg].opus",
    "Mujhko Barsaat Bana Lo",
    "musicimage/mujhko-barsat-banal lo.jpg",
    "Armaan Maalik"

  );
});

document.getElementById("lovemelikeyou").addEventListener("click", () => {
  if (audio != null) {
    quitmusic();
  }
  playsystem(
    "music/Ellie Goulding - Love Me Like You Do (Vevo Presents_ Live in London) [KAca7KQ9p-A].mp3",
    "Love Me Like You Do.",
    "musicimage/Love me like you do.png",
    "Ellie Goulding"

  );
});
