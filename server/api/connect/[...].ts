const routes = {
  "/users/@me": {
    GET: "getMe",
  },
  "/users/@me/guilds": {
    GET: "getGuilds",
  },
  "/guilds/{guild.id}": {
    GET: "getGuild",
  },
  "/guilds/{guild.id}/channels": {
    GET: "getChannels",
    POST: "createGuildChannel",
  },
  "/channels/{channel.id}": {
    GET: "getChannel",
    PATCH: "modifyChannel",
    DELETE: "deleteChannel",
  },
  "/channels/{channel.id}/online_nums": {
    GET: "getChannelOnlineNums",
  },
  "/guilds/{guild.id}/members": {
    GET: "getGuildMembers",
  },
  "/guilds/{guild.id}/roles/{role.id}/members": {
    GET: "getGuildRoleMembers",
  },
  "/guilds/{guild.id}/members/{user.id}": {
    GET: "getGuildMember",
    DELETE: "removeGuildMember",
  },
  "/guilds/{guild.id}/roles": {
    GET: "getGuildRoles",
    POST: "createGuildRole",
  },
  "/guilds/{guild.id}/roles/{role.id}": {
    PATCH: "modifyGuildRole",
    DELETE: "removeGuildRole",
  },
  "/guilds/{guild.id}/members/{user.id}/roles/{role.id}": {
    PUT: "addGuildMemberRole",
    DELETE: "removeGuildMemberRole",
  },
  "/channels/{channel.id}/members/{user.id}/permissions": {
    GET: "getChannelMemberPermissions",
    PUT: "modifyChannelMemberPermissions",
  },
  "/channels/{channel.id}/roles/{role.id}/permissions": {
    GET: "getChannelRole",
    PUT: "modifyChannelRole",
  },
  "/channels/{channel.id}/messages/{message.id}": {
    GET: "getMessage",
    DELETE: "deleteMessage",
  },
  "/channels/{channel.id}/messages": {
    POST: "sendMessage",
  },
  "/dms/{guild.id}/messages": {
    POST: "sendDM",
  },
  "/guilds/{guild.id}/messages/setting": {
    GET: "getMessageSetting",
  },
  "/users/@me/dms": {
    POST: "createDMS",
  },
  "/dms/{guild.id}/messages/{message.id}": {
    DELETE: "deleteDM",
  },
  "/guilds/{guild.id}/mute": {
    PATCH: "muteGuildOrMembers",
  },
  "/guilds/{guild.id}/members/{user.id}/mute": {
    PATCH: "muteGuildMember",
  },
  "/guilds/{guild.id}/announces": {
    POST: "createGuildAnnounce",
  },
  "/guilds/{guild.id}/announces/{message.id}": {
    DELETE: "removeGuildAnnounce",
  },
  "/channels/{channel.id}/pins/{message.id}": {
    PUT: "createPinsMessage",
    DELETE: "removePinsMessage",
  },
  "/channels/{channel.id}/pins": {
    GET: "getPinsMessage",
  },
  "/channels/{channel.id}/schedules": {
    GET: "getSchedules",
    POST: "createSchedule",
  },
  "/channels/{channel.id}/schedules/{schedule.id}": {
    GET: "getSchedule",
    PATCH: "modifySchedule",
    DELETE: "removeSchedule",
  },
  "/channels/{channel.id}/messages/{message.id}/reactions/{type}/{id}": {
    PUT: "createReaction",
    DELETE: "deleteReaction",
    GET: "getReactions",
  },
  "/channels/{channel.id}/threads": {
    GET: "listThreads",
    PUT: "createPost",
  },
  "/channels/{channel.id}/threads/{thread.id}": {
    DELETE: "removePost",
  },
  "/guilds/{guild.id}/api_permissions": {
    GET: "getGuildApiPermissions",
  },
  "/guilds/{guild.id}/api_permissions/demand": {
    POST: "createGuildApiPermissionDemand",
  },
  gateway: {
    GET: "/gateway",
  },
} as Record<string, Partial<Record<any, string>>>;
export default defineEventHandler((event) => {
  console.log(event.context, event.context.params!._, event.method);
  // event.context.path to get the route path: '/api/foo/bar/baz'
  const path = event.context.params!._ as string;
  // event.context.params._ to get the route segment: 'bar/baz'
  const url = routes[path]?.[event.method];
  if (url) {
    switch (event.method) {
      case "GET":
        return $get(url, getQuery(event));
      case "HEAD":
      case "PATCH":
      case "POST":
      case "PUT":
      case "DELETE":
      case "CONNECT":
      case "OPTIONS":
      case "TRACE":
    }
  }
  return;
});
