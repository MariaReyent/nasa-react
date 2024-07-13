export default function Sidebar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>
            {" "}
            <p>{data?.explanation}</p>
          </p>
        </div>
        <button>
          <i
            className="fa-solid fa-arrow-right"
            onClick={handleToggleModal}
          ></i>
        </button>
      </div>
    </div>
  );
}
