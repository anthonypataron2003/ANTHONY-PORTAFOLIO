document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var mobilePanel = document.querySelector("[data-mobile-panel]");

  if (menuToggle && mobilePanel) {
    menuToggle.addEventListener("click", function () {
      var isOpen = mobilePanel.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobilePanel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobilePanel.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var techCards = document.querySelectorAll("[data-tech-card]");

  techCards.forEach(function (card) {
    function toggleTechCard() {
      var isSelected = card.getAttribute("aria-pressed") === "true";
      card.setAttribute("aria-pressed", String(!isSelected));
    }

    card.addEventListener("click", toggleTechCard);
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTechCard();
      }
    });
  });

  var skillCategories = document.querySelectorAll("[data-skill-category]");

  skillCategories.forEach(function (category) {
    function toggleSkillCategory() {
      var isSelected = category.getAttribute("aria-pressed") === "true";
      category.setAttribute("aria-pressed", String(!isSelected));
    }

    category.addEventListener("click", toggleSkillCategory);
    category.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleSkillCategory();
      }
    });
  });

  var THEME_KEY = "portfolio-theme";
  var themeToggle = document.querySelector("[data-theme-toggle]");
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
      themeToggle.textContent = theme === "dark" ? "☀" : "☾";
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro",
      );
    }
  }

  applyTheme("dark");
  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      applyTheme(saved);
    }
  } catch (e) {
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current =
        root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
      }
    });
  }

  var chips = document.querySelectorAll("[data-filter-chip]");
  var projectCards = document.querySelectorAll("[data-project-card]");

  if (chips.length && projectCards.length) {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) {
          c.setAttribute("aria-pressed", "false");
        });
        chip.setAttribute("aria-pressed", "true");
        var tech = chip.getAttribute("data-filter-chip");

        projectCards.forEach(function (card) {
          var stack = (card.getAttribute("data-stack") || "").split(",");
          var show = tech === "todos" || stack.indexOf(tech) !== -1;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  var modalBackdrop = document.querySelector("[data-modal]");
  var modalClose = document.querySelector("[data-modal-close]");
  var lastFocused = null;

  function openModal(card) {
    if (!modalBackdrop) return;
    lastFocused = document.activeElement;

    modalBackdrop.querySelector("[data-modal-title]").textContent =
      card.getAttribute("data-title") || "";
    modalBackdrop.querySelector("[data-modal-desc]").textContent =
      card.getAttribute("data-desc") || "";
    modalBackdrop.querySelector("[data-modal-problem]").textContent =
      card.getAttribute("data-problem") || "";
    modalBackdrop.querySelector("[data-modal-tech]").textContent =
      card.getAttribute("data-stack-label") || "";

    var repoLink = modalBackdrop.querySelector("[data-modal-repo]");
    var demoLink = modalBackdrop.querySelector("[data-modal-demo]");
    var repoUrl = card.getAttribute("data-repo");
    var demoUrl = card.getAttribute("data-demo");

    if (repoUrl) {
      repoLink.href = repoUrl;
      repoLink.style.display = "";
    } else {
      repoLink.style.display = "none";
    }
    if (demoUrl) {
      demoLink.href = demoUrl;
      demoLink.style.display = "";
    } else {
      demoLink.style.display = "none";
    }

    modalBackdrop.classList.add("is-open");
    modalClose.focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  if (modalBackdrop) {
    projectCards.forEach(function (card) {
      card.addEventListener("click", function () {
        openModal(card);
      });
      card.addEventListener("keypress", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(card);
        }
      });
    });

    modalClose.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", function (e) {
      if (e.target === modalBackdrop) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modalBackdrop.classList.contains("is-open"))
        closeModal();
    });
  }

  var form = document.querySelector("[data-contact-form]");

  if (form) {
    var statusBox = form.querySelector("[data-form-status]");

    function setError(field, message) {
      var wrapper = field.closest(".field");
      wrapper.classList.add("has-error");
      wrapper.querySelector(".field__error").textContent = message;
    }

    function clearError(field) {
      var wrapper = field.closest(".field");
      wrapper.classList.remove("has-error");
    }

    function isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    form.querySelectorAll("input, textarea").forEach(function (field) {
      field.addEventListener("input", function () {
        clearError(field);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      var name = form.querySelector("#contact-name");
      var email = form.querySelector("#contact-email");
      var message = form.querySelector("#contact-message");

      if (!name.value.trim()) {
        setError(name, "Escribe tu nombre.");
        valid = false;
      }
      if (!email.value.trim() || !isValidEmail(email.value.trim())) {
        setError(email, "Escribe un correo válido.");
        valid = false;
      }
      if (!message.value.trim() || message.value.trim().length < 10) {
        setError(message, "Cuéntame un poco más (mínimo 10 caracteres).");
        valid = false;
      }

      if (!valid) return;

      statusBox.textContent =
        "Mensaje listo para enviar. Gracias, " +
        name.value.trim() +
        " — te responderé pronto.";
      statusBox.classList.add("is-visible");
      form.reset();
    });
  }

  var typeEl = document.querySelector("[data-typewriter]");
  if (typeEl) {
    var words = (typeEl.getAttribute("data-words") || "")
      .split(",")
      .map(function (w) {
        return w.trim();
      })
      .filter(Boolean);
    var reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (words.length > 1 && !reduceMotion) {
      var wordIndex = 0,
        charIndex = 0,
        deleting = false;

      function tick() {
        var current = words[wordIndex];
        if (!deleting) {
          charIndex++;
          typeEl.textContent = current.slice(0, charIndex);
          if (charIndex === current.length) {
            deleting = true;
            setTimeout(tick, 1400);
            return;
          }
        } else {
          charIndex--;
          typeEl.textContent = current.slice(0, charIndex);
          if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
          }
        }
        setTimeout(tick, deleting ? 40 : 70);
      }
      setTimeout(tick, 900);
    }
  }

  var toTop = document.querySelector("[data-to-top]");
  if (toTop) {
    window.addEventListener("scroll", function () {
      toTop.classList.toggle("is-visible", window.scrollY > 480);
    });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});