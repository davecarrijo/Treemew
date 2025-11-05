document.getElementById("main_container").onmousemove = (e) => {
  for (const main_container of document.getElementsByClassName(
    "main_container"
  )) {
    const rect = main_container.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    main_container.style.setProperty("--mouse-x", `${x}px`);
    main_container.style.setProperty("--mouse-y", `${y}px`);
  }
};
