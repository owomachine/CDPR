import React from "react";

import Navbar from "../elements/navbar";
import GameForm from "../elements/game-form"
import AdminTable from "../elements/admin-table";

function AdminPage() {
  return (
    <div>
      <Navbar />
      <GameForm/>
      <AdminTable/>
    </div>
  );
}

export default AdminPage;
