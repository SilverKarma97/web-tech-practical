const focusHyperlinks = () => {
  const a = document.querySelectorAll("a");
  a.forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.classList.add("red");
    });
  });
};

const handleSubmit = () => {
  const text = window.confirm("Do you really want to submit form?");
  if (text) {
    window.open("/submitted.html");
  }
};

focusHyperlinks();
