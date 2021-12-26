import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";

import { Container, DogImg } from "./styles";

export function Dog({ url, id }) {
  const { hash } = useLocation();

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    let dogId;
    if (hash) {
      dogId = hash.replace("#", "");
      setSelected(dogId === id);
    }
  }, [hash, id]);

  return (
    <Container selected={selected}>
      <a href={`#${id}`}>
        <DogImg src={url} />
      </a>
    </Container>
  );
}
