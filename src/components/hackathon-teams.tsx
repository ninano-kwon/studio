import type { Team } from '@/data/schedule';

export function HackathonTeams({ teams }: { teams: Team[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-sm">
      {teams.map((team) => (
        <div key={team.name}>
          <h4 className="font-bold text-foreground mb-2">{team.name}</h4>
          <div className="space-y-1">
            {team.members.map((member) => (
              <div key={member.name} className="flex justify-between">
                <span>{member.name}</span>
                <span className="text-right text-muted-foreground">{member.community}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
