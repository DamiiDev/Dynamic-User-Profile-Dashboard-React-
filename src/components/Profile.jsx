import React from "react";
import { useParams } from "react-router-dom";

const Profile = ({ users }) => {
  const { username } = useParams();

  const user = users.find((u) => u.username === username) ?? null;

  if (!user)
    return <p className="text-center mt-10 text-gray-500">User not found</p>;

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex gap-5 items-start flex-wrap">
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="w-22 h-22 rounded-full object-cover border-2 border-gray-200"
            style={{ width: 88, height: 88 }}
          />
        ) : (
          <div
            className="flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-semibold text-2xl flex-shrink-0"
            style={{ width: 88, height: 88 }}
          >
            {initials}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            {user.openToWork && (
              <span className="text-xs bg-green-100 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">
                Open to work
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-0.5">@{user.username}</p>
          {user.bio && (
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {user.bio}
            </p>
          )}

          {/* Social Links */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {user.github && (
              <a
                href={user.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition"
              >
                <GithubIcon /> GitHub
              </a>
            )}
            {user.twitter && (
              <a
                href={user.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition"
              >
                <TwitterIcon /> Twitter
              </a>
            )}
            {user.linkedin && (
              <a
                href={user.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition"
              >
                <LinkedinIcon /> LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>

      <Divider />

      {/* Stats */}
      {user.stats && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Followers", value: formatCount(user.stats.followers) },
            { label: "Following", value: formatCount(user.stats.following) },
            { label: "Projects", value: user.stats.projects ?? 0 },
            { label: "Posts", value: user.stats.posts ?? 0 },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="border border-gray-200 rounded-xl p-4 text-center bg-white"
            >
              <div className="text-xl font-semibold">{value}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      )}

      <Divider />

      {/* Skills & Tech Stack */}
      {user.skills?.length > 0 && (
        <div>
          <SectionLabel>Skills & Tech Stack</SectionLabel>
          <div className="flex flex-wrap gap-2 mt-3">
            {user.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <Divider />

      {/* Projects */}
      {user.projects?.length > 0 && (
        <div>
          <SectionLabel>Projects</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {user.projects.map((project) => (
              <div
                key={project.name}
                className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{project.name}</span>
                  {project.visibility && (
                    <span className="text-xs text-gray-500 border border-gray-200 rounded-full px-2 py-0.5">
                      {project.visibility}
                    </span>
                  )}
                </div>
                {project.description && (
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                )}
                <div className="flex items-center gap-2 flex-wrap mt-1">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 border border-gray-200 rounded-full px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.stars != null && (
                    <span className="text-xs text-gray-400 ml-auto">
                      ★ {project.stars}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Divider />

      {/* Activity Feed */}
      {user.activity?.length > 0 && (
        <div>
          <SectionLabel>Activity</SectionLabel>
          <div className="border border-gray-200 rounded-xl bg-white divide-y divide-gray-100 mt-3">
            {user.activity.map((item, i) => (
              <div key={i} className="flex gap-3 p-4">
                <div
                  className="flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-medium text-xs flex-shrink-0"
                  style={{ width: 34, height: 34 }}
                >
                  {initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 mb-1">{item.meta}</p>
                  {item.content && (
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Helpers ── */

const Divider = () => <hr className="border-t border-gray-100" />;

const SectionLabel = ({ children }) => (
  <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
    {children}
  </p>
);

const formatCount = (n) => {
  if (!n && n !== 0) return "—";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return n;
};

/* ── SVG Icons ── */

const GithubIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default Profile;
