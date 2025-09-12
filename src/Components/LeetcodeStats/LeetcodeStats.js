import React, { useEffect, useState } from "react";
import "./LeetcodeStats.css";

const LeetcodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoverIndex, setHoverIndex] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "https://leetcode-stats-api.herokuapp.com/Premsai_Sajja"
        );
        const json = await res.json();
        setStats(json);
      } catch (err) {
        console.error("Error fetching LeetCode stats:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    let interval;
    if (hoverIndex !== 0) {
      interval = setInterval(() => {
        setHoverIndex((prev) => (prev + 1) % hoverStates.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [hoverIndex]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!stats) return <p>Failed to load stats.</p>;

  const solvedPercent = (stats.totalSolved / stats.totalQuestions) * 100;

  const hoverStates = [
    { big: `${stats.totalSolved}`, small: `/${stats.totalQuestions}`, label: "Solved" },
    { big: `${stats.acceptanceRate}`, small: "%", label: "Acceptance" },
    { big: "90", small: ".82%", label: "Beats" },
    { big: "91", small: ".96%", label: "Beats" },
    { big: "74", small: ".11%", label: "Beats" },
  ];

  return (
    <div className="leetcode-card">
      <div className="leetcode-Header">
        <header>LeetCode Stats</header>
      </div>

      <div className="leetcode-content">
        {/* Circle progress */}
        <div
          className="circle-wrapper"
          onMouseEnter={() => setHoverIndex(1)}
          onMouseLeave={() => setHoverIndex(0)}
        >
          <svg className="circle-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="circle-base" />
            <circle
              cx="50"
              cy="50"
              r="45"
              className="circle-progress"
              strokeDasharray={`${(solvedPercent / 100) * 283} 283`}
            />
          </svg>

          {hoverStates.map((state, i) => (
            <div
              key={i}
              className={`hover-text ${hoverIndex === i ? "active" : ""}`}
            >
              <span className="hover-big">
                {state.big}
                <span className="hover-small">{state.small}</span>
              </span>
              <span className="hover-label">{state.label}</span>
            </div>
          ))}
        </div>

        {/* Side Difficulty Stats */}
        <div className="difficulty-stats">
          <div className="diff-box easy">
            Easy: {stats.easySolved}/{stats.totalEasy}
          </div>
          <div className="diff-box medium">
            Medium: {stats.mediumSolved}/{stats.totalMedium}
          </div>
          <div className="diff-box hard">
            Hard: {stats.hardSolved}/{stats.totalHard}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetcodeStats;
