const Box = () => {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" color={"blue"} />
    </mesh>
  );
};

export default Box;
