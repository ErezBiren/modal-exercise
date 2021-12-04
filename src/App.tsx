import Modal from "./components/Modal/Modal";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/SpecificDialogs/Sidebar/Sidebar";
import ConfirmDialog from "./components/SpecificDialogs/ConfirmDialog/ConfirmDialog";

const showAlertInWithDelay = (message: string, delay: number = 500) => {
  setTimeout(() => {
    alert(message);
  }, delay);
};

function App() {
  const [isOpenGenericModal, setIsOpenGenericModal] = useState(false);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => setIsOpenGenericModal(!isOpenGenericModal)}
        className="App-item"
      >
        Toggle a generic modal
      </button>
      <button
        onClick={() => setIsOpenConfirm(!isOpenConfirm)}
        className="App-item"
      >
        Toggle a specific Confirm dialog
      </button>
      <button
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        className="App-item"
      >
        Toggle Sidebar
      </button>

      <Modal
        open={isOpenGenericModal}
        handleClose={() => setIsOpenGenericModal(false)}
      >
        <h1 style={{ color: "white" }}> simple generic modal</h1>
      </Modal>

      {/* A specific confirm dialog that uses generic Dialog component, that uses the Modal component*/}
      <ConfirmDialog
        open={isOpenConfirm}
        confirmCallback={() => {
          setIsOpenConfirm(false);
          showAlertInWithDelay("You confirmed!");
        }}
        cancelCallback={() => {
          setIsOpenConfirm(false);
          showAlertInWithDelay("You canceled!");
        }}
        handleClose={() => setIsOpenConfirm(false)}
        contentText="What do you get when you multiply 6 by 7?"
        title="42"
        showCancelButton="true"
      />

      <Modal
        open={isOpenSidebar}
        hideBackdrop={true}
        handleClose={() => setIsOpenSidebar(false)}
      >
        <Sidebar />
      </Modal>

      <h4>
        The following text is just a long content to show that the modal is
        above the DOM and that the sidebar is sticky
      </h4>
      <p className="App-long-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor
        odio, fermentum non sapien ac, lobortis vehicula nunc. Suspendisse sit
        amet massa nec nibh bibendum semper. Vivamus turpis tellus, euismod sit
        amet sagittis id, convallis vitae eros. Cras pretium ipsum tellus, eu
        tristique ex rhoncus ut. Nullam eleifend orci et nulla tristique, quis
        blandit nibh finibus. Nunc sed odio eget eros dapibus iaculis.
        Pellentesque a placerat diam. Praesent commodo sodales sapien et
        pellentesque. Aenean id nisi quis tortor bibendum fermentum non ac
        lectus. Vivamus mauris lorem, bibendum non pretium non, dapibus vitae
        erat. Maecenas id felis lacinia, consectetur odio ac, feugiat risus. In
        in enim accumsan, ultrices massa in, hendrerit nulla. Etiam accumsan
        aliquet ipsum, a semper diam pellentesque a. Curabitur luctus pretium
        auctor. Etiam gravida tincidunt ex, non facilisis dui ornare in. Cras
        hendrerit placerat mattis. Praesent et nulla nibh. Ut nec dignissim
        dolor, et aliquam turpis. Nulla finibus libero enim, et tempus ex luctus
        vel. Ut a interdum turpis. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia Curae; Donec sit amet justo vitae
        libero semper vulputate. Nam tincidunt metus arcu, non ultricies nisl
        vehicula at. Maecenas posuere placerat orci eu ultricies. Phasellus
        sagittis nulla a magna placerat mattis. Mauris hendrerit non nisi at
        fermentum. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Pellentesque porttitor tristique
        vehicula. Duis a sollicitudin risus, ac vestibulum magna. Nullam porta
        consectetur neque a ullamcorper. Aliquam volutpat metus dolor, id
        ullamcorper ligula viverra at. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia Curae; Praesent consequat odio
        libero, a malesuada nisi aliquet at. Sed pellentesque eros id pharetra
        malesuada. Quisque malesuada suscipit libero, condimentum cursus augue
        laoreet nec. Pellentesque luctus eu risus ac tincidunt. Proin vehicula
        scelerisque odio, quis luctus risus faucibus a. Aenean vulputate massa
        vel justo gravida, vel egestas velit tristique. Morbi ut tortor sed elit
        efficitur mollis. Donec sollicitudin, velit pellentesque convallis
        porttitor, est ex blandit nibh, ut aliquet massa orci vulputate erat.
        Duis faucibus sit amet nisl vel scelerisque. Vivamus sapien nulla,
        consequat nec diam cursus, accumsan gravida dolor. Morbi tincidunt
        pellentesque orci nec mattis. Donec lacinia placerat tortor, ut viverra
        urna consequat posuere. Nam tempor finibus nulla, a lobortis dui
        efficitur facilisis. Vivamus elit est, blandit eget auctor dapibus,
        molestie non enim. Vestibulum pellentesque aliquam felis, in accumsan
        libero iaculis sed. Pellentesque ultricies urna nec augue tempor, sit
        amet tempus ligula faucibus. Praesent id metus dui. Morbi iaculis augue
        vel tempor blandit. Etiam laoreet dapibus ligula id mollis. Curabitur
        ultrices nunc a metus bibendum, sit amet feugiat tortor ultrices. Nullam
        dictum nunc libero, non sodales nibh consectetur non. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Morbi dolor odio, fermentum non
        sapien ac, lobortis vehicula nunc. Suspendisse sit amet massa nec nibh
        bibendum semper. Vivamus turpis tellus, euismod sit amet sagittis id,
        convallis vitae eros. Cras pretium ipsum tellus, eu tristique ex rhoncus
        ut. Nullam eleifend orci et nulla tristique, quis blandit nibh finibus.
        Nunc sed odio eget eros dapibus iaculis. Pellentesque a placerat diam.
        Praesent commodo sodales sapien et pellentesque. Aenean id nisi quis
        tortor bibendum fermentum non ac lectus. Vivamus mauris lorem, bibendum
        non pretium non, dapibus vitae erat. Maecenas id felis lacinia,
        consectetur odio ac, feugiat risus. In in enim accumsan, ultrices massa
        in, hendrerit nulla. Etiam accumsan aliquet ipsum, a semper diam
        pellentesque a. Curabitur luctus pretium auctor. Etiam gravida tincidunt
        ex, non facilisis dui ornare in. Cras hendrerit placerat mattis.
        Praesent et nulla nibh. Ut nec dignissim dolor, et aliquam turpis. Nulla
        finibus libero enim, et tempus ex luctus vel. Ut a interdum turpis.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec sit amet justo vitae libero semper vulputate. Nam
        tincidunt metus arcu, non ultricies nisl vehicula at. Maecenas posuere
        placerat orci eu ultricies. Phasellus sagittis nulla a magna placerat
        mattis. Mauris hendrerit non nisi at fermentum. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Pellentesque porttitor tristique vehicula. Duis a sollicitudin risus, ac
        vestibulum magna. Nullam porta consectetur neque a ullamcorper. Aliquam
        volutpat metus dolor, id ullamcorper ligula viverra at. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Praesent consequat odio libero, a malesuada nisi aliquet at. Sed
        pellentesque eros id pharetra malesuada. Quisque malesuada suscipit
        libero, condimentum cursus augue laoreet nec. Pellentesque luctus eu
        risus ac tincidunt. Proin vehicula scelerisque odio, quis luctus risus
        faucibus a. Aenean vulputate massa vel justo gravida, vel egestas velit
        tristique. Morbi ut tortor sed elit efficitur mollis. Donec
        sollicitudin, velit pellentesque convallis porttitor, est ex blandit
        nibh, ut aliquet massa orci vulputate erat. Duis faucibus sit amet nisl
        vel scelerisque. Vivamus sapien nulla, consequat nec diam cursus,
        accumsan gravida dolor. Morbi tincidunt pellentesque orci nec mattis.
        Donec lacinia placerat tortor, ut viverra urna consequat posuere. Nam
        tempor finibus nulla, a lobortis dui efficitur facilisis. Vivamus elit
        est, blandit eget auctor dapibus, molestie non enim. Vestibulum
        pellentesque aliquam felis, in accumsan libero iaculis sed. Pellentesque
        ultricies urna nec augue tempor, sit amet tempus ligula faucibus.
        Praesent id metus dui. Morbi iaculis augue vel tempor blandit. Etiam
        laoreet dapibus ligula id mollis. Curabitur ultrices nunc a metus
        bibendum, sit amet feugiat tortor ultrices. Nullam dictum nunc libero,
        non sodales nibh consectetur non.
      </p>
      <div id="portal"></div>
    </div>
  );
}

export default App;
