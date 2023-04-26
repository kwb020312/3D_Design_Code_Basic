import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../assets/images/map.jpg";

const Box = () => {
  const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach={"material"} />
    </mesh>
  );
};

export default Box;
