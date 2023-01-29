import { useNavigate, useMatch } from "@reach/router";

export default function AdminSidebar({ setSelectedLink }) {

    return (
        <aside className="sidebar">
            <input className="search" type="text" id="search" name="search" placeholder="Search" />
            <ul>
                <CustomLink to="/admin/signuplog" onClick={() => setSelectedLink("/admin/signuplog")}>User Accounts</CustomLink>
                <CustomLink to="/admin/testkitlog" onClick={() => setSelectedLink("/admin/testkitlog")}>Test Kit Record</CustomLink>
            </ul>
        </aside>

    );
}

function CustomLink({ to, children, onClick, ...props }) {
    const navigate = useNavigate();
    const isActive = useMatch({ path: to });

    function handleClick(event) {
        event.preventDefault();
        navigate(to);
        onClick();
    }

    return (
        <li className={isActive ? "active" : ""}>
            <a href="#" onClick={handleClick} {...props}>
                {children}
            </a>
        </li>
    );
}
