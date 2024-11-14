const UsersList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div>
              <strong>{user.name}</strong> - {user.email} - {user.phone} - {user.status}
              <button onClick={() => onEdit(user, index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Excluir</button> {/* Passando apenas o index */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
