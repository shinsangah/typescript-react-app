import React from "react";
import styles from "../styles/Section.module.scss";
// 마음대로 지정하기는 하는데 약간 일종의 국룰임 이름 바꿔도 상관은 없음 (styles 말고도)

export default function Section({ color }: { color: string }) {
  return (
    <div className={styles.box}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestiae
        impedit, atque corrupti ad natus laborum perferendis amet voluptas
        assumenda ut mollitia iure consequatur dignissimos, pariatur suscipit
        vel ea. Consequuntur!
      </p>
      <button className={styles[color]}>버튼</button>
    </div>
  );
}
