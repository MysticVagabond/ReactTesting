import React from 'react';
import SidebarComponent from "./sidebar-component";

export default function DashboardComponent({ id }) {
    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <SidebarComponent id={id} />
        </div>
    );
}