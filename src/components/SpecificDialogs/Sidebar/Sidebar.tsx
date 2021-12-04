import "./Sidebar.css";

interface SidebarProps {
  position: string;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="sidebar-container">
      mocking a sidebar in position: {props.position}
    </div>
  );
};

export default Sidebar;
