const downloadResume = () => {
  const link = document.createElement("a");

  link.href = "/resume/resume.pdf";

  link.download = "Kumar_Swamy_Resume.pdf";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

export default downloadResume;