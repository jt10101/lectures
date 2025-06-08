// export default function FounderListItem(props) {
//   return (
//     <li>
//       <h3>
//         {props.name} : {props.title}
//       </h3>
//       <p>MBA from SuperLegit University</p>
//     </li>
//   );
// }

export default function FounderListItem({ name, title, credential }) {
  return (
    <li>
      <h3>
        {name} : {title}
      </h3>
      <p>{credential}</p>
    </li>
  );
}
