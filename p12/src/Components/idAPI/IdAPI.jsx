import { useParams } from 'react-router-dom';

function IdAPI() {
  const { id } = useParams();

  return (
    <div>
      <h1>The ID is: {id}</h1>
    </div>
  );
}

export default IdAPI;