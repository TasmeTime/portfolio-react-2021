export default function SkillBadges(props) {
  return (
    <div className="badges-container">
      {props.skills.map(function (badge, i) {
        return (
          <span key={i} className="skill-badge">
            {badge}
          </span>
        );
      })}
    </div>
  );
}
