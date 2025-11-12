import { getAge } from "./dateUtils";

/**
 * Filters a list of players based on team, positions, and age range.
 * @param {Array} players - Array of player objects
 * @param {Object} filters - Object containing selectedTeam, selectedPositions, ageRange
 * @returns {Array} Filtered array of players
 */
export function filterPlayers(players, {
  selectedTeam,
  selectedPositions,
  ageRange
}) {
  const filteredPlayers = players.filter(player => {
    const teamMatch = selectedTeam
      ? player.team === selectedTeam
      : true;

    const positionMatch =
      selectedPositions.includes('all') ||
      selectedPositions.includes(player.position.toLowerCase());

    const playerAge = getAge(player.dateOfBirth);

    const ageMatch =
      (ageRange.min === null || playerAge >= ageRange.min) &&
      (ageRange.max === null || playerAge <= ageRange.max);

    return teamMatch && positionMatch && ageMatch;
  });

  return filteredPlayers;
}

/**
 * Sorts a list of players based on a selected sort option.
 * @param {Array} players - Array of player objects
 * @param {string} sortOption
 * - Sort criteria ('default', 'name', 'name-revert',
 * 'team', 'team-revert', 'age', 'age-revert')
 * @returns {Array} Sorted array of players
 */
export function sortPlayers(players, sortOption) {
  const sortedPlayers = sortOption === 'default'
    ? players
    : [...players].sort((a, b) => {
      switch (sortOption) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'name-revert':
          return b.name.localeCompare(a.name);
        case 'team':
          return a.team.localeCompare(b.team);
        case 'team-revert':
          return b.team.localeCompare(a.team);
        case 'age':
          return getAge(a.dateOfBirth) - getAge(b.dateOfBirth);
        case 'age-revert':
          return getAge(b.dateOfBirth) - getAge(a.dateOfBirth);
        default:
          return 0;
      };
    });

  return sortedPlayers;
}

/**
 * Filters a list of players based on a search text (case-insensitive) applied to player names.
 * @param {Array} players - Array of player objects
 * @param {string} filterText - Text to search for in player names
 * @returns {Array} Array of players whose names include the filter text
 */
export function searchPlayers(players, filterText) {
  const searchedPlayers = players.filter(player => (
    player.name.toLowerCase().includes(filterText.toLowerCase().trim())
  ));

  return searchedPlayers;
}
