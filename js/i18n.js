i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init(
    {
      fallbackLng: "en",
      backend: {
        loadPath: "../assets/locales/{{lng}}/translation.json",
      },
      detection: {
        order: ["localStorage", "cookie", "querystring", "htmlTag"],
        caches: ["localStorage"],
      },
    },
    function (err, t) {
      updateContent();
      document.getElementById("languageSwitcher").value = i18next.language;
    }
  );

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});

function changeLanguage(lang) {
  i18next.changeLanguage(lang, function (err, t) {
    updateContent();
  });
}

function updateContent() {
  document.getElementById("welcome").innerHTML = i18next.t("welcome");
  if (i18next.language === "ar") {
    document.getElementById("welcome").classList.add("leading-[8rem]");
  } else {
    document.getElementById("welcome").classList.remove("leading-[8rem]");
}

  const navLinks = document.querySelectorAll("#navLinks a");
  navLinks.forEach((link) => {
    const key = link.getAttribute("data-key");
    link.innerHTML = i18next.t(key);
  });

  const lang = i18next.language;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}
