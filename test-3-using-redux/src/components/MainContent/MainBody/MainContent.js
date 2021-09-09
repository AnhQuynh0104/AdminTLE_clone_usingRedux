import { useState, useEffect } from "react"
import { Pagination, Button } from "antd"
import "./MainContent.scss"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../../actions/UserAction"
import ListUser from "../ListUser/ListUser"
import ModalUser from "../ModalUser/ModalUser"

const MainContent = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const [addModal, setAddModal] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [editModal, setEditModal] = useState(null)

  useEffect(() => {
    dispatch(actions.getUser())
  }, [])

  const onFinishModal = (dataUser) => {
    if (addModal) {
      dispatch(actions.addUser({ ...dataUser }))
      setAddModal(false)
    } else {
      dataUser.id = editModal.id
      dispatch(actions.editUser(dataUser))
      setEditModal(null)
    }
  }

  const onConfirmDelete = (id) => {
    dispatch(actions.deleteUser(id))
  }

  const onCancelModal = () => {
    setAddModal(false)
    setEditModal(null)
  }

  return (
    <div className="main-content">
      <div className="title">Hover Data Table</div>
      <div>
        <Button
          type="primary"
          style={{ marginBottom: 20, fontSize: 14 }}
          onClick={() => setAddModal(true)}
        >
          Add user
        </Button>
        <ModalUser
          addModal={addModal}
          editModal={editModal}
          onFinishModal={onFinishModal}
          onCancelModal={onCancelModal}
        ></ModalUser>
        <ListUser
          users={users}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          onConfirmDelete={onConfirmDelete}
          editModal={editModal}
          setEditModal={setEditModal}
        ></ListUser>
        <div className="table-footer">
          <div className="desc">Showing 1 to 1 of 10 entries</div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  )
}

export default MainContent
