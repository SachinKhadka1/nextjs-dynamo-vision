const Drawer = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
          <label htmlFor="my-drawer" aria-label="close sidebar" className="btn">
            Close
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
