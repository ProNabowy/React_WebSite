export const arrow = () => {
  window.scrollBy({
    top: 950,
    left: 0,
    behavior: "smooth"
  });
};

export const scrollFun = (btn) => {
  window.addEventListener("scroll" , () => {
    window.scrollY >= 925 ? btn.classList.add("show") || btn.classList.remove("hide")  : btn.classList.remove("show") || btn.classList.add("hide")
  })
}

export const btnClick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  })
}

export const scrollFunc = (element , height) => {
  window.addEventListener("scroll" , () => {
    if (window.scrollY >= height) element.classList.add("active");
  })
}

export const toggleList = (btn) => {
  const list = document.getElementById("list-item");
  const icons = document.getElementById("icons");
  if (btn) {
    list.style.cssText += "left: 0px !important";
    icons.style.cssText += "left: 50% !important";

  } else {
    list.style.cssText += "left:-1000px !important";
    icons.style.cssText += "left:-1000px !important";
  }
};

export const setSliderFunc = (setSlider) => {
  if (window.innerWidth > 991) {
    setSlider(4)
  } else if (window.innerWidth > 768 && window.innerWidth <= 991) {
    setSlider(2)
  } else if (window.innerWidth <= 768) {
    setSlider(1)
  };
};
export const resizeFun = (setSlider) => {
  window.addEventListener("resize" , () => {
    if (window.innerWidth > 991) {
      setSlider(4)
    } else if (window.innerWidth > 768 && window.innerWidth <= 991) {
      setSlider(2)
    } else if (window.innerWidth <= 768) {
      setSlider(1)
    };
  })
};

export const fixedHeader = () => {
  const header = document.querySelector("header");
  const toggle = () => {
    if (window.scrollY < 100) {
      header.style.cssText += "position: relative; visibility: visible; opacity: 1; transform: scale(1);";
    } else if (window.scrollY > 100 && window.scrollY < 900) {
      header.style.cssText += "position: relative; visibility: hidden; opacity: 0; transform: scale(0);";
    } else if (window.scrollY > 900) {
      header.style.cssText += "position: fixed; top: 0; width: 100%; visibility: visible; opacity: 1; transform: scale(1);";
    }
  }
  window.addEventListener("scroll" , () => {
    toggle();
  })
  toggle();
};
