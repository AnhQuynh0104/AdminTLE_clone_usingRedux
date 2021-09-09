import { Popconfirm, Button } from "antd"
import {
  FaSortAmountDownAlt,
  RiArrowUpDownFill,
  FaEdit,
  FaTrash
} from "react-icons/all"
import "./ListUser.scss"

const ListUser = (props) => {
  const { users, isDelete, setIsDelete, onConfirmDelete, setEditModal } = props

  return (
    <>
      <div className="container">
        <table className="table mt-3">
          <thead>
            <tr>
              <th>
                <span className="th-name">Index</span>
                <span className="th-sort">
                  <FaSortAmountDownAlt />
                </span>
              </th>
              <th>
                <span className="th-name">Name</span>
                <span className="th-sort">
                  <RiArrowUpDownFill />
                </span>
              </th>
              <th>
                <span className="th-name">Email</span>
                <span className="th-sort">
                  <RiArrowUpDownFill />
                </span>
              </th>
              <th>
                <span className="th-name">City</span>
                <span className="th-sort">
                  <RiArrowUpDownFill />
                </span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td className="group-btn">
                  <Button
                    className="btn-edit"
                    onClick={() => {
                      setEditModal(user)
                    }}
                  >
                    <FaEdit className="icon-edit" />
                  </Button>
                  <Popconfirm
                    title={`Are you sure to delete ${user.name}?`}
                    onConfirm={() => onConfirmDelete(isDelete)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      className="btn-delete"
                      onClick={() => setIsDelete(user.id)}
                    >
                      <FaTrash className="icon-delete" />
                    </Button>
                  </Popconfirm>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}

export default ListUser
