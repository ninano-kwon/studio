import type { Team } from '@/data/schedule';

export function HackathonTeams({ teams }: { teams: Team[] }) {
  return (
    <div className="space-y-4 text-sm">
      {teams.map((team) => (
        <div key={team.name}>
          <h4 className="font-bold text-foreground mb-2">{team.name}</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {team.members.map((member) => (
              <div key={member.name} className="flex justify-between">
                <span>{member.name}</span>
                <span className="text-right">{member.community}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
