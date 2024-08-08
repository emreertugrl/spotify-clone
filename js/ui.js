import { elements } from "./helper.js";
// *ekrana gönderilen müzikleri aktarır
export const renderSearchMusic = (songs) => {
  elements.list.innerHTML = "";
  songs.forEach((song) => {
    console.log(song);
    const div = document.createElement("div");

    div.dataset.url = song.hub.actions.pop().uri;
    div.dataset.title = song.title;
    div.dataset.img = song.images.coverart;
    div.className = "card";

    div.innerHTML = `
    <figure>
      <img src="${song.images.coverart}" />
      <div class="play">
        <i class="bi bi-play-fill" id="play-btn"></i>
      </div>
    </figure>
    <h4>${song.subtitle}</h4>
    <h4>${song.title.slice(0, 15) + "..."}</h4>
  `;
    elements.list.appendChild(div);
  });
};

// * Başlığı aldığı parametreye göre günceller.
export const updateTitle = (message) => {
  elements.title.innerHTML = message;
};

//* popüler müzikleri ekrana yazdırır.
export const renderSongs = (songs) => {
  console.log(songs);
  elements.list.innerHTML = "";
  songs.forEach((song) => {
    const div = document.createElement("div");

    div.dataset.url = song.preview_url;
    div.dataset.title = song.name;
    div.dataset.img = song.album.images[1].url;

    div.className = "card";

    div.innerHTML = `
    <figure>
      <img
        src="${song.album.images[1].url}"
        alt="resim"
      />
      <div class="play">
        <i class="bi bi-play-fill" id="play-btn"></i>
      </div>
    </figure>
    <h4>${song.album.artists[0].name}</h4>
    <h4>${song.name.slice(0, 15) + "..."}</h4>
    `;
    elements.list.appendChild(div);
  });
};
//*playingInfo kısmına resim ve title aktarıldı
export const renderPlayingInfo = (song) => {
  elements.playingInfo.innerHTML = `
  <img src="${song.img}" alt="" />
  <div class="">
    <p>Şu an oynatılıyor...</p>
    <h3>${song.title}</h3>
  </div>
  
  `;
};
