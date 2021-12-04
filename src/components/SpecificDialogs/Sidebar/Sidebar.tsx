import "./Sidebar.css";

interface SidebarProps {
  position: string;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="sidebar-container">
      sidebar in position: {props.position}
    </div>
  );
};

export default Sidebar;
