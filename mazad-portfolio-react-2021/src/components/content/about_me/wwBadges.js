var badges = ["C#", "C#", "C#", "C#", "C#", "C#"];
export default function WWBadge(props) {
  return (
    <div className="badges-container">
      {props.workedWith.map(function (badge, i) {
        return (
          <span key={i} className="ww-badge">
            {badge}
          </span>
        );
      })}
    </div>
  );
}
