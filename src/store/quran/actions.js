import { LocalStorage } from "quasar";

export function fetchSurahList(context) {
  context.commit("showLoading", "fetchSurahList");
  return new Promise((resolve, reject) => {
    this.$httpQuran({
      url: "chapters",
      params: {
        language: "id"
      }
    })
      .then(res => {
        context.commit("updateSurahList", res.data.chapters);
        context.commit("hideLoading", "fetchSurahList");
        resolve(res);
      })
      .catch(err => {
        context.commit("hideLoading", "fetchSurahList");
        reject(err);
      });
  });
}

export async function fetchSurah(context, surahId) {
  context.commit("showLoading", "fetchSurah");

  // Getting chapter for versesCount
  const chapter = await this.$httpQuran({
    url: `chapters/${surahId}`,
    params: {
      language: "id"
    }
  })
    .then(res => res.data.chapter)
    .catch(err => console.log(err));

  const urls = [
    {
      url: "quran/verses/uthmani",
      params: {
        chapter_number: surahId
      }
    },
    {
      url: "quran/translations/33",
      params: {
        chapter_number: surahId,
        fields: "verse_number"
      }
    }
  ];

  const requests = [];
  urls.forEach(url => {
    requests.push(
      new Promise((resolve, reject) => {
        this.$httpQuran({
          url: url.url,
          params: url.params
        })
          .then(res => {
            resolve(res.data);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      })
    );
  });

  return Promise.all(requests)
    .then(values => {
      const arabics = values[0].verses;
      const translations = values[1].translations;
      const merged = Object.assign({ ayahs: arabics, translations }, chapter);
      context.commit("updateSurah", merged);
      context.commit("hideLoading", "fetchSurah");
    })
    .catch(err => {
      console.log(err);
      context.commit("hideLoading", "fetchSurah");
    });
}

export function setSurahLastRead(context, { surah, offsetTop }) {
  const surahLastRead = Object.assign({ offsetTop }, surah);
  LocalStorage.set("surah-last-read", surahLastRead);
  context.commit("updateSurahLastRead", surahLastRead);
}

export function removeSurahLastRead(context) {
  LocalStorage.remove("surah-last-read");
  context.commit("updateSurahLastRead", null);
}

export function setQuranReaderScrollPosition(context, { offsetTop }) {
  LocalStorage.set("surah-list-scroll-position", offsetTop);
  context.commit("updateQuranReaderScrollPosition", offsetTop);
}

export function setQuranSearchAyahScrollPosition(context, { offsetTop }) {
  LocalStorage.set("search-ayah-scroll-position", offsetTop);
  context.commit("updateQuranSearchAyahScrollPosition", offsetTop);
}

export async function searchByAyah(context, { keyword, page = 1 }) {
  context.commit("showLoading", "searchAyah");
  const surahList =
    context.state.surahList.length != 0
      ? context.state.surahList
      : await context.dispatch("fetchSurahList").then(res => res.data.chapters);

  const perPage = context.state.searchAyah.paging.perPage;

  return new Promise((resolve, reject) => {
    this.$httpQuran({
      url: "search",
      params: {
        query: keyword,
        size: perPage,
        page: page
      }
    })
      .then(res => {
        if (res.status == 204) {
          context.commit("hideLoading", "searchAyah");
          resolve({
            results: []
          });
          return;
        }
        const data = res.data.search;
        const results = data.results;
        const paging = {
          total: data.total_results,
          perPage: perPage,
          totalPage: data.total_pages,
          currentPage: page
        };

        // Appending surah name & ayah
        results.forEach((item, i, arr) => {
          const verseKeys = item.verse_key.split(":");
          const surah = surahList.find(s => s.id == verseKeys[0]);
          arr[i].surahId = surah.id;
          arr[i].surahName = surah.name_simple;
          arr[i].ayahNumber = verseKeys[1];
        });

        context.commit("updateSearchAyahPaging", paging);
        context.commit("addSearchAyahResults", results);
        context.commit("hideLoading", "searchAyah");
        resolve({
          results,
          paging
        });
      })
      .catch(err => {
        context.commit("hideLoading", "searchAyah");
        reject(err);
      });
  });
}

export function resetSearchAyahResults(context) {
  context.commit("resetSearchAyahResults");
}

export function resetSearchAyahPaging(context) {
  context.commit("resetSearchAyahPaging");
}
