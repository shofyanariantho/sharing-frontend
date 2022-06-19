import React from "react";
import PageTitle from "../../components/PageTitle";
import CreateActor from "../../components/CreateActor";

const AddActor = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        {/* Page Title */}
        <PageTitle title="Form Actor" />

        {/* Content */}
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-6">
              <CreateActor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddActor;
