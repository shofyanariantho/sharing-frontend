import React from "react";
import ActorTable from "../../components/ActorTable";
import PageTitle from "../../components/PageTitle";

const ListActor = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        {/* Page Title */}
        <PageTitle title="List Actor" />

        {/* Content */}
        <div className="card-body">
          <ActorTable />
        </div>
      </div>
    </div>
  );
};

export default ListActor;
