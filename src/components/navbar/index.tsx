import React, {ReactNode} from "react";

interface props {
    children?: ReactNode;
}

export default function Navbar({children}: props) {
    return (
        <div>
            {children}
        </div>
    );
}