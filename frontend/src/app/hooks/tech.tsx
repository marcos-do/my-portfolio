const useTech = () => {
  const getAllTechs = async () => {
    const response = await fetch("http://localhost:3001/tech");
    return await response.json();
  };

  return { getAllTechs };
};

export default useTech;
