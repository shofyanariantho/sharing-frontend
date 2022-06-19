import React from "react";
import UpdateActor from "../../components/UpdateActor";
import PageTitle from "../../components/PageTitle";

const EditActor = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        {/* Page Title */}
        <PageTitle title="Update Actor" />

        {/* Content */}
        <div className="card-body">
          <UpdateActor />
        </div>
      </div>
    </div>
  );
};

export default EditActor;
