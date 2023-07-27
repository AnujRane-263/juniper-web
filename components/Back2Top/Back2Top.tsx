import s from "./Back2Top.module.scss";

const Back2Top = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={`${s.container} boxed`}>
      <button style={{ color: "#000" }} onClick={handleScrollToTop}>
        Back to top{" "}
        <i className="fas fa-arrow-up" style={{ color: "#000" }}></i>
      </button>
    </div>
  );
};

export default Back2Top;
