define({ "api": [
  {
    "type": "GET",
    "url": "/notifications/threads/:id/subscription",
    "title": "checkNotificationThreadSubscription",
    "name": "checkNotificationThreadSubscription",
    "description": "<p>This checks to see if the current user is subscribed to a thread. You can also <a href=\"https://developer.github.com/v3/activity/watching/#get-a-repository-subscription\">get a Repository subscription</a>.</p> <p>Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were <strong>@mention</strong>ed, or manually subscribe to a thread. <a href=\"https://developer.github.com/v3/activity/notifications/#get-a-thread-subscription\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.checkNotificationThreadSubscription({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.checkNotificationThreadSubscription({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.checkNotificationThreadSubscription({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/user/starred/:owner/:repo",
    "title": "checkStarringRepo",
    "name": "checkStarringRepo",
    "description": "<p>Requires for the user to be authenticated. <a href=\"https://developer.github.com/v3/activity/starring/#check-if-you-are-starring-a-repository\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.checkStarringRepo({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.checkStarringRepo({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.checkStarringRepo({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "DELETE",
    "url": "/notifications/threads/:id/subscription",
    "title": "deleteNotificationThreadSubscription",
    "name": "deleteNotificationThreadSubscription",
    "description": "<p>Mutes all future notifications for a conversation until you comment on the thread or get <strong>@mention</strong>ed. <a href=\"https://developer.github.com/v3/activity/notifications/#delete-a-thread-subscription\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.deleteNotificationThreadSubscription({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.deleteNotificationThreadSubscription({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.deleteNotificationThreadSubscription({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/events",
    "title": "getEvents",
    "name": "getEvents",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/events/#list-public-events\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEvents({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEvents({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEvents({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/events",
    "title": "getEventsForOrg",
    "name": "getEventsForOrg",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/events/#list-public-events-for-an-organization\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForOrg({org, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForOrg({org, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForOrg({org, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/events",
    "title": "getEventsForRepo",
    "name": "getEventsForRepo",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/events/#list-repository-events\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForRepo({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForRepo({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForRepo({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/networks/:owner/:repo/events",
    "title": "getEventsForRepoNetwork",
    "name": "getEventsForRepoNetwork",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/events/#list-public-events-for-a-network-of-repositories\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForRepoNetwork({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForRepoNetwork({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForRepoNetwork({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/events",
    "title": "getEventsForUser",
    "name": "getEventsForUser",
    "description": "<p>If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events. <a href=\"https://developer.github.com/v3/activity/events/#list-events-performed-by-a-user\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForUser({username, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForUser({username, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForUser({username, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/events/orgs/:org",
    "title": "getEventsForUserOrg",
    "name": "getEventsForUserOrg",
    "description": "<p>This is the user's organization dashboard. You must be authenticated as the user to view this. <a href=\"https://developer.github.com/v3/activity/events/#list-events-for-an-organization\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForUserOrg({username, org, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForUserOrg({username, org, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForUserOrg({username, org, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/events/public",
    "title": "getEventsForUserPublic",
    "name": "getEventsForUserPublic",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/events/#list-public-events-performed-by-a-user\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsForUserPublic({username, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsForUserPublic({username, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsForUserPublic({username, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/received_events",
    "title": "getEventsReceived",
    "name": "getEventsReceived",
    "description": "<p>These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events. <a href=\"https://developer.github.com/v3/activity/events/#list-events-that-a-user-has-received\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsReceived({username, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsReceived({username, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsReceived({username, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/received_events/public",
    "title": "getEventsReceivedPublic",
    "name": "getEventsReceivedPublic",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/events/#list-public-events-that-a-user-has-received\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getEventsReceivedPublic({username, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getEventsReceivedPublic({username, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getEventsReceivedPublic({username, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/feeds",
    "title": "getFeeds",
    "name": "getFeeds",
    "description": "<p>GitHub provides several timeline resources in <a href=\"http://en.wikipedia.org/wiki/Atom_(standard)\">Atom</a> format. The Feeds API lists all the feeds available to the authenticated user: <strong>Timeline</strong>: The GitHub global public timeline <strong>User</strong>: The public timeline for any user, using <a href=\"https://developer.github.com/v3/#hypermedia\">URI template</a> <strong>Current user public</strong>: The public timeline for the authenticated user <strong>Current user</strong>: The private timeline for the authenticated user <strong>Current user actor</strong>: The private timeline for activity created by the authenticated user <strong>Current user organizations</strong>: The private timeline for the organizations the authenticated user is a member of. <em>Note</em>*: Private feeds are only returned when <a href=\"https://developer.github.com/v3/#basic-authentication\">authenticating via Basic Auth</a> since current feed URIs use the older, non revocable auth tokens. <a href=\"https://developer.github.com/v3/activity/feeds/#list-feeds\">REST API doc</a></p>",
    "group": "Activity",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getFeeds({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getFeeds({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getFeeds({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/notifications/threads/:id",
    "title": "getNotificationThread",
    "name": "getNotificationThread",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/notifications/#view-a-single-thread\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getNotificationThread({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getNotificationThread({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getNotificationThread({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/notifications",
    "title": "getNotifications",
    "name": "getNotifications",
    "description": "<p>List all notifications for the current user, sorted by most recently updated. <a href=\"https://developer.github.com/v3/activity/notifications/#list-your-notifications\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "all",
            "defaultValue": "false",
            "description": "<p>If <code>true</code>, show notifications marked as read.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "participating",
            "defaultValue": "false",
            "description": "<p>If <code>true</code>, only shows notifications in which the user is directly participating or mentioned.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "defaultValue": "current date/time",
            "description": "<p>Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "before",
            "description": "<p>Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getNotifications({all, participating, since, before, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getNotifications({all, participating, since, before, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getNotifications({all, participating, since, before, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/notifications",
    "title": "getNotificationsForUser",
    "name": "getNotificationsForUser",
    "description": "<p>List all notifications for the current user. <a href=\"https://developer.github.com/v3/activity/notifications/#list-your-notifications-in-a-repository\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "all",
            "defaultValue": "false",
            "description": "<p>If <code>true</code>, show notifications marked as read.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "participating",
            "defaultValue": "false",
            "description": "<p>If <code>true</code>, only shows notifications in which the user is directly participating or mentioned.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "defaultValue": "current date/time",
            "description": "<p>Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "before",
            "description": "<p>Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getNotificationsForUser({owner, repo, all, participating, since, before, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getNotificationsForUser({owner, repo, all, participating, since, before, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getNotificationsForUser({owner, repo, all, participating, since, before, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/subscription",
    "title": "getRepoSubscription",
    "name": "getRepoSubscription",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/watching/#get-a-repository-subscription\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getRepoSubscription({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getRepoSubscription({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getRepoSubscription({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stargazers",
    "title": "getStargazersForRepo",
    "name": "getStargazersForRepo",
    "description": "<p>You can also find out <em>when</em> stars were created by passing the following custom <a href=\"https://developer.github.com/v3/media/\">media type</a> via the <code>Accept</code> header: <a href=\"https://developer.github.com/v3/activity/starring/#list-stargazers\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getStargazersForRepo({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getStargazersForRepo({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getStargazersForRepo({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/user/starred",
    "title": "getStarredRepos",
    "name": "getStarredRepos",
    "description": "<p>You can also find out <em>when</em> stars were created by passing the following custom <a href=\"https://developer.github.com/v3/media/\">media type</a> via the <code>Accept</code> header: <a href=\"https://developer.github.com/v3/activity/starring/#list-repositories-being-starred\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>One of <code>created</code> (when the repository was starred) or <code>updated</code> (when it was last pushed to).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": "<p>One of <code>asc</code> (ascending) or <code>desc</code> (descending).</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getStarredRepos({sort, direction, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getStarredRepos({sort, direction, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getStarredRepos({sort, direction, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/starred",
    "title": "getStarredReposForUser",
    "name": "getStarredReposForUser",
    "description": "<p>You can also find out <em>when</em> stars were created by passing the following custom <a href=\"https://developer.github.com/v3/media/\">media type</a> via the <code>Accept</code> header: <a href=\"https://developer.github.com/v3/activity/starring/#list-repositories-being-starred\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>One of <code>created</code> (when the repository was starred) or <code>updated</code> (when it was last pushed to).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": "<p>One of <code>asc</code> (ascending) or <code>desc</code> (descending).</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getStarredReposForUser({username, sort, direction, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getStarredReposForUser({username, sort, direction, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getStarredReposForUser({username, sort, direction, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/user/subscriptions",
    "title": "getWatchedRepos",
    "name": "getWatchedRepos",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/watching/#list-repositories-being-watched\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getWatchedRepos({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getWatchedRepos({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getWatchedRepos({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/users/:username/subscriptions",
    "title": "getWatchedReposForUser",
    "name": "getWatchedReposForUser",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/watching/#list-repositories-being-watched\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getWatchedReposForUser({username, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getWatchedReposForUser({username, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getWatchedReposForUser({username, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/subscribers",
    "title": "getWatchersForRepo",
    "name": "getWatchersForRepo",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/watching/#list-watchers\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.getWatchersForRepo({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.getWatchersForRepo({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.getWatchersForRepo({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PATCH",
    "url": "/notifications/threads/:id",
    "title": "markNotificationThreadAsRead",
    "name": "markNotificationThreadAsRead",
    "description": "<p><a href=\"https://developer.github.com/v3/activity/notifications/#mark-a-thread-as-read\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.markNotificationThreadAsRead({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.markNotificationThreadAsRead({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.markNotificationThreadAsRead({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/notifications",
    "title": "markNotificationsAsRead",
    "name": "markNotificationsAsRead",
    "description": "<p>Marking a notification as &quot;read&quot; removes it from the <a href=\"https://github.com/notifications\">default view on GitHub</a>. <a href=\"https://developer.github.com/v3/activity/notifications/#mark-as-read\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "last_read_at",
            "defaultValue": "current date/time",
            "description": "<p>Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.markNotificationsAsRead({last_read_at})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.markNotificationsAsRead({last_read_at}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.markNotificationsAsRead({last_read_at}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/notifications",
    "title": "markNotificationsAsReadForRepo",
    "name": "markNotificationsAsReadForRepo",
    "description": "<p>Marking all notifications in a repository as &quot;read&quot; removes them from the <a href=\"https://github.com/notifications\">default view on GitHub</a>. <a href=\"https://developer.github.com/v3/activity/notifications/#mark-notifications-as-read-in-a-repository\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "last_read_at",
            "defaultValue": "current date/time",
            "description": "<p>Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.markNotificationsAsReadForRepo({owner, repo, last_read_at}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/notifications/threads/:id/subscription",
    "title": "setNotificationThreadSubscription",
    "name": "setNotificationThreadSubscription",
    "description": "<p>This lets you subscribe or unsubscribe from a conversation. <a href=\"https://developer.github.com/v3/activity/notifications/#set-a-thread-subscription\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "ignored",
            "defaultValue": "false",
            "description": "<p>Unsubscribes and subscribes you to a conversation. Set <code>ignored</code> to <code>true</code> to block all notifications from this thread.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.setNotificationThreadSubscription({id, ignored})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.setNotificationThreadSubscription({id, ignored}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.setNotificationThreadSubscription({id, ignored}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/subscription",
    "title": "setRepoSubscription",
    "name": "setRepoSubscription",
    "description": "<p>If you would like to watch a repository, set <code>subscribed</code> to <code>true</code>. If you would like to ignore notifications made within a repository, set <code>ignored</code> to <code>true</code>. If you would like to stop watching a repository, <a href=\"#delete-a-repository-subscription\">delete the repository's subscription</a> completely. <a href=\"https://developer.github.com/v3/activity/watching/#set-a-repository-subscription\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "subscribed",
            "description": "<p>Determines if notifications should be received from this repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "ignored",
            "description": "<p>Determines if all notifications should be blocked from this repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.setRepoSubscription({owner, repo, subscribed, ignored}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/user/starred/:owner/:repo",
    "title": "starRepo",
    "name": "starRepo",
    "description": "<p>Requires for the user to be authenticated.</p> <p>Note that you'll need to set <code>Content-Length</code> to zero when calling out to this endpoint. For more information, see &quot;<a href=\"https://developer.github.com/v3/#http-verbs\">HTTP verbs</a>.&quot; <a href=\"https://developer.github.com/v3/activity/starring/#star-a-repository\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.starRepo({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.starRepo({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.starRepo({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "DELETE",
    "url": "/user/starred/:owner/:repo",
    "title": "unstarRepo",
    "name": "unstarRepo",
    "description": "<p>Requires for the user to be authenticated. <a href=\"https://developer.github.com/v3/activity/starring/#unstar-a-repository\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.unstarRepo({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.unstarRepo({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.unstarRepo({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/subscription",
    "title": "unwatchRepo",
    "name": "unwatchRepo",
    "description": "<p>This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, <a href=\"#set-a-repository-subscription\">set the repository's subscription manually</a>. <a href=\"https://developer.github.com/v3/activity/watching/#delete-a-repository-subscription\">REST API doc</a></p>",
    "group": "Activity",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.activity.unwatchRepo({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.activity.unwatchRepo({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.activity.unwatchRepo({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Activity"
  },
  {
    "type": "PUT",
    "url": "/user/installations/:installation_id/repositories/:repository_id",
    "title": "addRepoToInstallation",
    "name": "addRepoToInstallation",
    "description": "<p>Add a single repository to an installation.</p> <p>The authenticated user must have admin access to the repository. <a href=\"https://developer.github.com/v3/apps/installations/#add-repository-to-installation\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repository_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.addRepoToInstallation({installation_id, repository_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.addRepoToInstallation({installation_id, repository_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.addRepoToInstallation({installation_id, repository_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/accounts/:id",
    "title": "checkMarketplaceListingAccount",
    "name": "checkMarketplaceListingAccount",
    "description": "<p><a href=\"https://developer.github.com/v3/apps/marketplace/#check-if-a-github-account-is-associated-with-any-marketplace-listing\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.checkMarketplaceListingAccount({id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.checkMarketplaceListingAccount({id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.checkMarketplaceListingAccount({id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/stubbed/accounts/:id",
    "title": "checkMarketplaceListingStubbedAccount",
    "name": "checkMarketplaceListingStubbedAccount",
    "description": "<p><a href=\"https://developer.github.com/v3/apps/marketplace/#check-if-a-github-account-is-associated-with-any-marketplace-listing\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.checkMarketplaceListingStubbedAccount({id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.checkMarketplaceListingStubbedAccount({id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.checkMarketplaceListingStubbedAccount({id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "POST",
    "url": "/installations/:installation_id/access_tokens",
    "title": "createInstallationToken",
    "name": "createInstallationToken",
    "description": "<p>Creates an access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of <code>401 - Unauthorized</code>, and requires creating a new installation token. <a href=\"https://developer.github.com/v3/apps/#create-a-new-installation-token\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.createInstallationToken({installation_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.createInstallationToken({installation_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.createInstallationToken({installation_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/app",
    "title": "get",
    "name": "get",
    "description": "<p>Returns the GitHub App associated with the <a href=\"https://developer.github.com/apps/building-github-apps/authentication-options-for-github-apps#authenticating-as-a-github-app\">authentication credentials</a> used. <a href=\"https://developer.github.com/v3/apps/#get-the-authenticated-github-app\">REST API doc</a></p>",
    "group": "Apps",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.get({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.get({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.get({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/apps/:app_slug",
    "title": "getForSlug",
    "name": "getForSlug",
    "description": "<p><strong>Note</strong>: The <code>:app_slug</code> is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., <code>https://github.com/settings/apps/:app_slug</code>). <a href=\"https://developer.github.com/v3/apps/#get-a-single-github-app\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "app_slug",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getForSlug({app_slug})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getForSlug({app_slug}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getForSlug({app_slug}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/app/installations/:installation_id",
    "title": "getInstallation",
    "name": "getInstallation",
    "description": "<p><a href=\"https://developer.github.com/v3/apps/#get-a-single-installation\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getInstallation({installation_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getInstallation({installation_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getInstallation({installation_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/installation/repositories",
    "title": "getInstallationRepositories",
    "name": "getInstallationRepositories",
    "description": "<p>List repositories that are accessible to the authenticated installation. <a href=\"https://developer.github.com/v3/apps/installations/#list-repositories\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getInstallationRepositories({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getInstallationRepositories({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getInstallationRepositories({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/app/installations",
    "title": "getInstallations",
    "name": "getInstallations",
    "description": "<p>The permissions the installation has are included under the <code>permissions</code> key. <a href=\"https://developer.github.com/v3/apps/#find-installations\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getInstallations({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getInstallations({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getInstallations({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/plans/:id/accounts",
    "title": "getMarketplaceListingPlanAccounts",
    "name": "getMarketplaceListingPlanAccounts",
    "description": "<p>Returns any accounts associated with a plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. <a href=\"https://developer.github.com/v3/apps/marketplace/#list-all-github-accounts-user-or-organization-on-a-specific-plan\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>Sorts the GitHub accounts by the date they were created or last updated. Can be one of <code>created</code> or <code>updated</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "description": "<p>To return the oldest accounts first, set to <code>asc</code>. Can be one of <code>asc</code> or <code>desc</code>. Ignored without the <code>sort</code> parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getMarketplaceListingPlanAccounts({id, sort, direction, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getMarketplaceListingPlanAccounts({id, sort, direction, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getMarketplaceListingPlanAccounts({id, sort, direction, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/plans",
    "title": "getMarketplaceListingPlans",
    "name": "getMarketplaceListingPlans",
    "description": "<p><a href=\"https://developer.github.com/v3/apps/marketplace/#list-all-plans-for-your-marketplace-listing\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getMarketplaceListingPlans({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getMarketplaceListingPlans({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getMarketplaceListingPlans({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/stubbed/plans/:id/accounts",
    "title": "getMarketplaceListingStubbedPlanAccounts",
    "name": "getMarketplaceListingStubbedPlanAccounts",
    "description": "<p>Returns any accounts associated with a plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. <a href=\"https://developer.github.com/v3/apps/marketplace/#list-all-github-accounts-user-or-organization-on-a-specific-plan\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>Sorts the GitHub accounts by the date they were created or last updated. Can be one of <code>created</code> or <code>updated</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "description": "<p>To return the oldest accounts first, set to <code>asc</code>. Can be one of <code>asc</code> or <code>desc</code>. Ignored without the <code>sort</code> parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getMarketplaceListingStubbedPlanAccounts({id, sort, direction, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getMarketplaceListingStubbedPlanAccounts({id, sort, direction, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getMarketplaceListingStubbedPlanAccounts({id, sort, direction, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/marketplace_listing/stubbed/plans",
    "title": "getMarketplaceListingStubbedPlans",
    "name": "getMarketplaceListingStubbedPlans",
    "description": "<p><a href=\"https://developer.github.com/v3/apps/marketplace/#list-all-plans-for-your-marketplace-listing\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.getMarketplaceListingStubbedPlans({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.getMarketplaceListingStubbedPlans({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.getMarketplaceListingStubbedPlans({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "DELETE",
    "url": "/user/installations/:installation_id/repositories/:repository_id",
    "title": "removeRepoFromInstallation",
    "name": "removeRepoFromInstallation",
    "description": "<p>Remove a single repository from an installation.</p> <p>The authenticated user must have admin access to the repository. <a href=\"https://developer.github.com/v3/apps/installations/#remove-repository-from-installation\">REST API doc</a></p>",
    "group": "Apps",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repository_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.apps.removeRepoFromInstallation({installation_id, repository_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.apps.removeRepoFromInstallation({installation_id, repository_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.apps.removeRepoFromInstallation({installation_id, repository_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Apps"
  },
  {
    "type": "GET",
    "url": "/applications/:client_id/tokens/:access_token",
    "title": "check",
    "name": "check",
    "description": "<p>OAuth applications can use a special API method for checking OAuth token validity without running afoul of normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use <a href=\"https://developer.github.com/v3/auth#basic-authentication\">Basic Authentication</a> when accessing it, where the username is the OAuth application <code>client_id</code> and the password is its <code>client_secret</code>. Invalid tokens will return <code>404 NOT FOUND</code>. <a href=\"https://developer.github.com/v3/oauth_authorizations/#check-an-authorization\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.check({client_id, access_token})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.check({client_id, access_token}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.check({client_id, access_token}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "POST",
    "url": "/authorizations",
    "title": "create",
    "name": "create",
    "description": "<p>If you need a small number of personal access tokens, implementing the <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps/\">web flow</a> can be cumbersome. Instead, tokens can be created using the OAuth Authorizations API using <a href=\"https://developer.github.com/v3/auth#basic-authentication\">Basic Authentication</a>. To create personal access tokens for a particular OAuth application, you must provide its client ID and secret, found on the OAuth application settings page, linked from your <a href=\"https://github.com/settings/developers\">OAuth applications listing on GitHub</a>.</p> <p>If your OAuth application intends to create multiple tokens for one user, use <code>fingerprint</code> to differentiate between them.</p> <p>You can also create OAuth tokens through the web UI via the <a href=\"https://github.com/settings/tokens\">personal access tokens settings</a>. Read more about these tokens on the <a href=\"https://help.github.com/articles/creating-an-access-token-for-command-line-use\">GitHub Help site</a>.</p> <p>Organizations that enforce SAML SSO require personal access tokens to be whitelisted. Read more about whitelisting tokens on the <a href=\"https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on\">GitHub Help site</a>. <a href=\"https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "scopes",
            "description": "<p>A list of scopes that this authorization is in.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>A note to remind you what the OAuth token is for. Tokens not associated with a specific OAuth application (i.e. personal access tokens) must have a unique note.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note_url",
            "description": "<p>A URL to remind you what app the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "client_id",
            "description": "<p>The 20 character OAuth app client key for which to create the token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "client_secret",
            "description": "<p>The 40 character OAuth app client secret for which to create the token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "fingerprint",
            "description": "<p>A unique string to distinguish an authorization from others created for the same client ID and user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.create({scopes, note, note_url, client_id, client_secret, fingerprint})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.create({scopes, note, note_url, client_id, client_secret, fingerprint}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.create({scopes, note, note_url, client_id, client_secret, fingerprint}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "DELETE",
    "url": "/authorizations/:id",
    "title": "delete",
    "name": "delete",
    "description": "<p><a href=\"https://developer.github.com/v3/oauth_authorizations/#delete-an-authorization\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.delete({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.delete({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.delete({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "DELETE",
    "url": "/applications/grants/:id",
    "title": "deleteGrant",
    "name": "deleteGrant",
    "description": "<p>Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on <a href=\"https://github.com/settings/applications#authorized\">the application authorizations settings screen within GitHub</a>. <a href=\"https://developer.github.com/v3/oauth_authorizations/#delete-a-grant\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.deleteGrant({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.deleteGrant({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.deleteGrant({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "GET",
    "url": "/authorizations/:id",
    "title": "get",
    "name": "get",
    "description": "<p><a href=\"https://developer.github.com/v3/oauth_authorizations/#get-a-single-authorization\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.get({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.get({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.get({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "GET",
    "url": "/authorizations",
    "title": "getAll",
    "name": "getAll",
    "description": "<p><a href=\"https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.getAll({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.getAll({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.getAll({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "GET",
    "url": "/applications/grants/:id",
    "title": "getGrant",
    "name": "getGrant",
    "description": "<p><a href=\"https://developer.github.com/v3/oauth_authorizations/#get-a-single-grant\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.getGrant({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.getGrant({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.getGrant({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "GET",
    "url": "/applications/grants",
    "title": "getGrants",
    "name": "getGrants",
    "description": "<p>You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the <a href=\"https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations\">list your authorizations</a> API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on <a href=\"https://github.com/settings/applications#authorized\">the application authorizations settings screen within GitHub</a>. The <code>scopes</code> returned are the union of scopes authorized for the application. For example, if an application has one token with <code>repo</code> scope and another token with <code>user</code> scope, the grant will return <code>[&quot;repo&quot;, &quot;user&quot;]</code>. <a href=\"https://developer.github.com/v3/oauth_authorizations/#list-your-grants\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.getGrants({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.getGrants({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.getGrants({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "PUT",
    "url": "/authorizations/clients/:client_id",
    "title": "getOrCreateAuthorizationForApp",
    "name": "getOrCreateAuthorizationForApp",
    "description": "<p>This method will create a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one. <a href=\"https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_secret",
            "description": "<p>The 40 character OAuth app client secret associated with the client ID specified in the URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "scopes",
            "description": "<p>A list of scopes that this authorization is in.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>A note to remind you what the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note_url",
            "description": "<p>A URL to remind you what app the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "fingerprint",
            "description": "<p>A unique string to distinguish an authorization from others created for the same client and user. If provided, this API is functionally equivalent to <a href=\"https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint\">Get-or-create an authorization for a specific app and fingerprint</a>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.getOrCreateAuthorizationForApp({client_id, client_secret, scopes, note, note_url, fingerprint})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.getOrCreateAuthorizationForApp({client_id, client_secret, scopes, note, note_url, fingerprint}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.getOrCreateAuthorizationForApp({client_id, client_secret, scopes, note, note_url, fingerprint}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "PUT",
    "url": "/authorizations/clients/:client_id/:fingerprint",
    "title": "getOrCreateAuthorizationForAppAndFingerprint",
    "name": "getOrCreateAuthorizationForAppAndFingerprint",
    "description": "<p>This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. <code>fingerprint</code> is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one. <a href=\"https://developer.github.com/v3/oauth_authorizations/#get-or-create-an-authorization-for-a-specific-app-and-fingerprint\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fingerprint",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_secret",
            "description": "<p>The 40 character OAuth app client secret associated with the client ID specified in the URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "scopes",
            "description": "<p>A list of scopes that this authorization is in.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>A note to remind you what the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note_url",
            "description": "<p>A URL to remind you what app the OAuth token is for.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.getOrCreateAuthorizationForAppAndFingerprint({client_id, fingerprint, client_secret, scopes, note, note_url})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.getOrCreateAuthorizationForAppAndFingerprint({client_id, fingerprint, client_secret, scopes, note, note_url}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.getOrCreateAuthorizationForAppAndFingerprint({client_id, fingerprint, client_secret, scopes, note, note_url}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "POST",
    "url": "/applications/:client_id/tokens/:access_token",
    "title": "reset",
    "name": "reset",
    "description": "<p>OAuth applications can use this API method to reset a valid OAuth token without end user involvement. Applications must save the &quot;token&quot; property in the response, because changes take effect immediately. You must use <a href=\"https://developer.github.com/v3/auth#basic-authentication\">Basic Authentication</a> when accessing it, where the username is the OAuth application <code>client_id</code> and the password is its <code>client_secret</code>. Invalid tokens will return <code>404 NOT FOUND</code>. <a href=\"https://developer.github.com/v3/oauth_authorizations/#reset-an-authorization\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.reset({client_id, access_token})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.reset({client_id, access_token}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.reset({client_id, access_token}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "DELETE",
    "url": "/applications/:client_id/tokens/:access_token",
    "title": "revoke",
    "name": "revoke",
    "description": "<p>OAuth application owners can revoke a single token for an OAuth application. You must use <a href=\"https://developer.github.com/v3/auth#basic-authentication\">Basic Authentication</a> for this method, where the username is the OAuth application <code>client_id</code> and the password is its <code>client_secret</code>. <a href=\"https://developer.github.com/v3/oauth_authorizations/#revoke-an-authorization-for-an-application\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.revoke({client_id, access_token})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.revoke({client_id, access_token}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.revoke({client_id, access_token}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "DELETE",
    "url": "/applications/:client_id/grants/:access_token",
    "title": "revokeGrant",
    "name": "revokeGrant",
    "description": "<p>OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use <a href=\"https://developer.github.com/v3/auth#basic-authentication\">Basic Authentication</a> for this method, where the username is the OAuth application <code>client_id</code> and the password is its <code>client_secret</code>. You must also provide a valid token as <code>:token</code> and the grant for the token's owner will be deleted.</p> <p>Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on <a href=\"https://github.com/settings/applications#authorized\">the application authorizations settings screen within GitHub</a>. <a href=\"https://developer.github.com/v3/oauth_authorizations/#revoke-a-grant-for-an-application\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.revokeGrant({client_id, access_token})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.revokeGrant({client_id, access_token}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.revokeGrant({client_id, access_token}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "PATCH",
    "url": "/authorizations/:id",
    "title": "update",
    "name": "update",
    "description": "<p>You can only send one of these scope keys at a time. <a href=\"https://developer.github.com/v3/oauth_authorizations/#update-an-existing-authorization\">REST API doc</a></p>",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "scopes",
            "description": "<p>Replaces the authorization scopes with these.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "add_scopes",
            "description": "<p>A list of scopes to add to this authorization.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "remove_scopes",
            "description": "<p>A list of scopes to remove from this authorization.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>A note to remind you what the OAuth token is for. Tokens not associated with a specific OAuth application (i.e. personal access tokens) must have a unique note.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note_url",
            "description": "<p>A URL to remind you what app the OAuth token is for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "fingerprint",
            "description": "<p>A unique string to distinguish an authorization from others created for the same client ID and user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.authorization.update({id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.authorization.update({id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.authorization.update({id, scopes, add_scopes, remove_scopes, note, note_url, fingerprint}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Authorization"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/check-runs",
    "title": "create",
    "name": "create",
    "description": "<p>Creates a new check run for a specific commit in a repository. Your GitHub App must have the <code>checks:write</code> permission to create check runs. <a href=\"https://developer.github.com/v3/checks/runs/#create-a-check-run\">REST API doc</a></p>",
    "group": "Checks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the check (e.g., &quot;code-coverage&quot;).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "head_branch",
            "description": "<p>The name of the branch to perform a check against.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "head_sha",
            "description": "<p>The SHA of the commit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "details_url",
            "description": "<p>The URL of the integrator's site that has the full details of the check.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "external_id",
            "description": "<p>A reference for the run on the integrator's system.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "queued",
              "in_progress",
              "completed"
            ],
            "optional": true,
            "field": "status",
            "defaultValue": "queued",
            "description": "<p>The current status. Can be one of <code>queued</code>, <code>in_progress</code>, or <code>completed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "started_at",
            "description": "<p>The time that the check run began in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "success",
              "failure",
              "neutral",
              "cancelled",
              "timed_out",
              "action_required",
              "details_url",
              "status",
              "completed"
            ],
            "optional": false,
            "field": "conclusion",
            "description": "<p>The final conclusion of the check. Can be one of <code>success</code>, <code>failure</code>, <code>neutral</code>, <code>cancelled</code>, <code>timed_out</code>, or <code>action_required</code>. When the conclusion is <code>action_required</code>, additional details should be provided on the site specified by <code>details_url</code>. Required if you provide a <code>status</code> of <code>completed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "completed_at",
            "description": "<p>The time the check completed in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Required if you provide <code>conclusion</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "output",
            "description": "<p>Check runs can accept a variety of data in the <code>output</code> object, including a <code>title</code> and <code>summary</code> and can optionally provide descriptive details about the run. See the <a href=\"#output-object\"><code>output</code> object</a> description.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:title",
            "description": "<p>The title of the check run.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:summary",
            "description": "<p>The summary of the check run. This parameter supports Markdown.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "output:text",
            "description": "<p>The details of the check run. This parameter supports Markdown.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": true,
            "field": "output:annotations",
            "description": "<p>Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. For details about annotations in the UI, see &quot;<a href=\"https://help.github.com/articles/about-status-checks#checks\">About status checks</a>&quot;. See the <a href=\"#annotations-object\"><code>annotations</code> object</a> description for details about how to use this parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:annotations:filename",
            "description": "<p>The name of the file to add an annotation to.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:annotations:blob_href",
            "description": "<p>The file's full blob URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "output:annotations:start_line",
            "description": "<p>The start line of the annotation.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "output:annotations:end_line",
            "description": "<p>The end line of the annotation.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "notice",
              "warning",
              "failure"
            ],
            "optional": false,
            "field": "output:annotations:warning_level",
            "description": "<p>The warning level of the annotation. Can be one of <code>notice</code>, <code>warning</code>, or <code>failure</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:annotations:message",
            "description": "<p>A short description of the feedback for these lines of code. The maximum size is 64 KB.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "output:annotations:title",
            "description": "<p>The title that represents the annotation. The maximum size is 255 characters.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "output:annotations:raw_details",
            "description": "<p>Details about this annotation. The maximum size is 64 KB.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": true,
            "field": "output:images",
            "description": "<p>Adds images to the output displayed in the GitHub pull request UI. See the <a href=\"#images-object\"><code>images</code> object</a> description for details.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:images:alt",
            "description": "<p>The alternative text for the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:images:image_url",
            "description": "<p>The full URL of the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "output:images:caption",
            "description": "<p>A short image description.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.checks.create({owner, repo, name, head_branch, head_sha, details_url, external_id, status, started_at, conclusion, completed_at, output, output.title, output.summary, output.text, output.annotations, output.annotations.filename, output.annotations.blob_href, output.annotations.start_line, output.annotations.end_line, output.annotations.warning_level, output.annotations.message, output.annotations.title, output.annotations.raw_details, output.images, output.images.alt, output.images.image_url, output.images.caption})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.checks.create({owner, repo, name, head_branch, head_sha, details_url, external_id, status, started_at, conclusion, completed_at, output, output.title, output.summary, output.text, output.annotations, output.annotations.filename, output.annotations.blob_href, output.annotations.start_line, output.annotations.end_line, output.annotations.warning_level, output.annotations.message, output.annotations.title, output.annotations.raw_details, output.images, output.images.alt, output.images.image_url, output.images.caption}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.checks.create({owner, repo, name, head_branch, head_sha, details_url, external_id, status, started_at, conclusion, completed_at, output, output.title, output.summary, output.text, output.annotations, output.annotations.filename, output.annotations.blob_href, output.annotations.start_line, output.annotations.end_line, output.annotations.warning_level, output.annotations.message, output.annotations.title, output.annotations.raw_details, output.images, output.images.alt, output.images.image_url, output.images.caption}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Checks"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/check-runs/:check_run_id",
    "title": "get",
    "name": "get",
    "description": "<p>Gets a single check run using its <code>id</code>. To get a check run, your GitHub App must have the <code>checks:read</code> permission on a private repository or pull access to a public repository. <a href=\"https://developer.github.com/v3/checks/runs/#get-a-single-check-run\">REST API doc</a></p>",
    "group": "Checks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "check_run_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.checks.get({owner, repo, check_run_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.checks.get({owner, repo, check_run_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.checks.get({owner, repo, check_run_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Checks"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/check-suites/:check_suite_id",
    "title": "getSuite",
    "name": "getSuite",
    "description": "<p>Gets a single check suite using its <code>id</code>. Your GitHub App must have the <code>checks:read</code> permission on a private repository or pull access to a public repository to get check suites. <a href=\"https://developer.github.com/v3/checks/suites/#get-a-single-check-suite\">REST API doc</a></p>",
    "group": "Checks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "check_suite_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.checks.getSuite({owner, repo, check_suite_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.checks.getSuite({owner, repo, check_suite_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.checks.getSuite({owner, repo, check_suite_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Checks"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/check-runs/:check_run_id/annotations",
    "title": "listAnnotations",
    "name": "listAnnotations",
    "description": "<p>Lists annotations for a check run using the annotation <code>id</code>. To list annotations for a check run, your GitHub App must have the <code>checks:read</code> permission on a private repository or pull access to a public repository. <a href=\"https://developer.github.com/v3/checks/runs/#list-annotations-for-a-check-run\">REST API doc</a></p>",
    "group": "Checks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "check_run_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.checks.listAnnotations({owner, repo, check_run_id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.checks.listAnnotations({owner, repo, check_run_id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.checks.listAnnotations({owner, repo, check_run_id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Checks"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/check-runs",
    "title": "listForRef",
    "name": "listForRef",
    "description": "<p>Lists check runs for a SHA, branch name, or tag name. To list check runs, your GitHub App must have the <code>checks:read</code> permission on a private repository or pull access to a public repository. <a href=\"https://developer.github.com/v3/checks/runs/#list-check-runs-for-a-specific-ref\">REST API doc</a></p>",
    "group": "Checks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>Can be a SHA, branch name, or tag name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "check_name",
            "description": "<p>Returns check runs with the specified <code>name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "queued",
              "in_progress",
              "completed"
            ],
            "optional": true,
            "field": "status",
            "description": "<p>Returns check runs with the specified <code>status</code>. Can be one of <code>queued</code>, <code>in_progress</code>, or <code>completed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "latest",
              "all"
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "latest",
            "description": "<p>Filters check runs by their <code>completed_at</code> timestamp. Can be one of <code>latest</code> (returning the most recent check runs) or <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.checks.listForRef({owner, repo, ref, check_name, status, filter, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.checks.listForRef({owner, repo, ref, check_name, status, filter, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.checks.listForRef({owner, repo, ref, check_name, status, filter, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Checks"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/check-suites/:id/check-runs",
    "title": "listForSuite",
    "name": "listForSuite",
    "description": "<p>Lists check runs for a check suite using its <code>id</code>. To list check runs, your GitHub App must have the <code>checks:read</code> permission on a private repository or pull access to a public repository. <a href=\"https://developer.github.com/v3/checks/runs/#list-check-runs-in-a-check-suite\">REST API doc</a></p>",
    "group": "Checks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "check_name",
            "description": "<p>Returns check runs with the specified <code>name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "queued",
              "in_progress",
              "completed"
            ],
            "optional": true,
            "field": "status",
            "description": "<p>Returns check runs with the specified <code>status</code>. Can be one of <code>queued</code>, <code>in_progress</code>, or <code>completed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "latest",
              "all"
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "latest",
            "description": "<p>Filters check runs by their <code>completed_at</code> timestamp. Can be one of <code>latest</code> (returning the most recent check runs) or <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.checks.listForSuite({owner, repo, id, check_name, status, filter, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.checks.listForSuite({owner, repo, id, check_name, status, filter, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.checks.listForSuite({owner, repo, id, check_name, status, filter, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Checks"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/check-suites",
    "title": "listSuitesForRef",
    "name": "listSuitesForRef",
    "description": "<p>Lists the check suites that were created for a commit <code>ref</code>. Your GitHub App must have the <code>checks:read</code> permission on a private repository or pull access to a public repository to list check suites. <a href=\"https://developer.github.com/v3/checks/suites/#list-check-suites-for-a-specific-ref\">REST API doc</a></p>",
    "group": "Checks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>The <code>ref</code> can be a SHA, branch name, or a tag name.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "app_id",
            "description": "<p>Filters check suites by GitHub App <code>id</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "check_name",
            "description": "<p>Filters checks suites by the name of the <a href=\"https://developer.github.com/v3/checks/runs/\">check run</a>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.checks.listSuitesForRef({owner, repo, ref, app_id, check_name, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.checks.listSuitesForRef({owner, repo, ref, app_id, check_name, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.checks.listSuitesForRef({owner, repo, ref, app_id, check_name, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Checks"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/check-suites/preferences",
    "title": "setSuitesPreferences",
    "name": "setSuitesPreferences",
    "description": "<p>Changes the default automatic flow when creating check suites. By default, the CheckSuiteEvent is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually <a href=\"https://developer.github.com/v3/checks/suites/#create-a-check-suite\">Create a check suite</a>. You must have admin permissions in the repository to set preferences for check suites. <a href=\"https://developer.github.com/v3/checks/suites/#set-preferences-for-check-suites-on-a-repository\">REST API doc</a></p>",
    "group": "Checks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": true,
            "field": "auto_trigger_checks",
            "description": "<p>Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the <a href=\"#auto_trigger_checks-object\"><code>auto_trigger_checks</code> object</a> description for details.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "auto_trigger_checks:app_id",
            "description": "<p>The <code>id</code> of the GitHub App.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "auto_trigger_checks:setting",
            "defaultValue": "true",
            "description": "<p>Set to <code>true</code> to enable automatic creation of CheckSuite events upon pushes to the repository, or <code>false</code> to disable them.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.checks.setSuitesPreferences({owner, repo, auto_trigger_checks, auto_trigger_checks[].app_id, auto_trigger_checks[].setting})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.checks.setSuitesPreferences({owner, repo, auto_trigger_checks, auto_trigger_checks[].app_id, auto_trigger_checks[].setting}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.checks.setSuitesPreferences({owner, repo, auto_trigger_checks, auto_trigger_checks[].app_id, auto_trigger_checks[].setting}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Checks"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/check-runs/:check_run_id",
    "title": "update",
    "name": "update",
    "description": "<p>Updates a check run for a specific commit in a repository. Your GitHub App must have the <code>checks:write</code> permission to edit check runs. <a href=\"https://developer.github.com/v3/checks/runs/#update-a-check-run\">REST API doc</a></p>",
    "group": "Checks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "check_run_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the check (e.g., &quot;code-coverage&quot;).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "details_url",
            "description": "<p>The URL of the integrator's site that has the full details of the check.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "external_id",
            "description": "<p>A reference for the run on the integrator's system.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "started_at",
            "description": "<p>A timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "queued",
              "in_progress",
              "completed"
            ],
            "optional": true,
            "field": "status",
            "description": "<p>The current status. Can be one of <code>queued</code>, <code>in_progress</code>, or <code>completed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "success",
              "failure",
              "neutral",
              "cancelled",
              "timed_out",
              "action_required",
              "details_url",
              "status",
              "completed"
            ],
            "optional": false,
            "field": "conclusion",
            "description": "<p>The final conclusion of the check. Can be one of <code>success</code>, <code>failure</code>, <code>neutral</code>, <code>cancelled</code>, <code>timed_out</code>, or <code>action_required</code>. When the conclusion is <code>action_required</code>, additional details should be provided on the site specified by <code>details_url</code>. Required if you provide a <code>status</code> of <code>completed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "completed_at",
            "description": "<p>The time the check completed in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Required if you provide <code>conclusion</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "output",
            "description": "<p>Check runs can accept a variety of data in the <code>output</code> object, including a <code>title</code> and <code>summary</code> and can optionally provide descriptive details about the run. See the <a href=\"#output-object-1\"><code>output</code> object</a> description.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "output:title",
            "description": "<p><strong>Required</strong>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:summary",
            "description": "<p>Can contain Markdown.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "output:text",
            "description": "<p>Can contain Markdown.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": true,
            "field": "output:annotations",
            "description": "<p>Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. For details about annotations in the UI, see &quot;<a href=\"https://help.github.com/articles/about-status-checks#checks\">About status checks</a>&quot;. See the <a href=\"#annotations-object-1\"><code>annotations</code> object</a> description for details.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:annotations:filename",
            "description": "<p>The name of the file to add an annotation to.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:annotations:blob_href",
            "description": "<p>The file's full blob URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "output:annotations:start_line",
            "description": "<p>The start line of the annotation.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "output:annotations:end_line",
            "description": "<p>The end line of the annotation.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "notice",
              "warning",
              "failure"
            ],
            "optional": false,
            "field": "output:annotations:warning_level",
            "description": "<p>The warning level of the annotation. Can be one of <code>notice</code>, <code>warning</code>, or <code>failure</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:annotations:message",
            "description": "<p>A short description of the feedback for these lines of code. The maximum size is 64 KB.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "output:annotations:title",
            "description": "<p>The title that represents the annotation. The maximum size is 255 characters.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "output:annotations:raw_details",
            "description": "<p>Details about this annotation. The maximum size is 64 KB.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": true,
            "field": "output:images",
            "description": "<p>Adds images to the output displayed in the GitHub pull request UI. See the <a href=\"#annotations-object-1\"><code>images</code> object</a> description for details.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:images:alt",
            "description": "<p>The alternative text for the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "output:images:image_url",
            "description": "<p>The full URL of the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "output:images:caption",
            "description": "<p>A short image description.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.checks.update({owner, repo, check_run_id, name, details_url, external_id, started_at, status, conclusion, completed_at, output, output.title, output.summary, output.text, output.annotations, output.annotations.filename, output.annotations.blob_href, output.annotations.start_line, output.annotations.end_line, output.annotations.warning_level, output.annotations.message, output.annotations.title, output.annotations.raw_details, output.images, output.images.alt, output.images.image_url, output.images.caption})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.checks.update({owner, repo, check_run_id, name, details_url, external_id, started_at, status, conclusion, completed_at, output, output.title, output.summary, output.text, output.annotations, output.annotations.filename, output.annotations.blob_href, output.annotations.start_line, output.annotations.end_line, output.annotations.warning_level, output.annotations.message, output.annotations.title, output.annotations.raw_details, output.images, output.images.alt, output.images.image_url, output.images.caption}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.checks.update({owner, repo, check_run_id, name, details_url, external_id, started_at, status, conclusion, completed_at, output, output.title, output.summary, output.text, output.annotations, output.annotations.filename, output.annotations.blob_href, output.annotations.start_line, output.annotations.end_line, output.annotations.warning_level, output.annotations.message, output.annotations.title, output.annotations.raw_details, output.images, output.images.alt, output.images.image_url, output.images.caption}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Checks"
  },
  {
    "type": "GET",
    "url": "/gists/:id/star",
    "title": "checkStar",
    "name": "checkStar",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/#check-if-a-gist-is-starred\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.checkStar({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.checkStar({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.checkStar({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "POST",
    "url": "/gists",
    "title": "create",
    "name": "create",
    "description": "<p>The keys in the <code>files</code> object are the <code>string</code> filename, and the value is another <code>object</code> with a key of <code>content</code>, and a value of the file contents. For example: <em>Note:</em>* Don't name your files &quot;gistfile&quot; with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally. <a href=\"https://developer.github.com/v3/gists/#create-a-gist\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "files",
            "description": "<p>Files that make up this gist.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A description of the gist.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "public",
            "defaultValue": "false",
            "description": "<p>Indicates whether the gist is public.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.create({files, description, public})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.create({files, description, public}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.create({files, description, public}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "POST",
    "url": "/gists/:gist_id/comments",
    "title": "createComment",
    "name": "createComment",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/comments/#create-a-comment\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gist_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>The comment text.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.createComment({gist_id, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.createComment({gist_id, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.createComment({gist_id, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "DELETE",
    "url": "/gists/:id",
    "title": "delete",
    "name": "delete",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/#delete-a-gist\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.delete({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.delete({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.delete({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "DELETE",
    "url": "/gists/:gist_id/comments/:id",
    "title": "deleteComment",
    "name": "deleteComment",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/comments/#delete-a-comment\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gist_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.deleteComment({gist_id, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.deleteComment({gist_id, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.deleteComment({gist_id, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "PATCH",
    "url": "/gists/:id",
    "title": "edit",
    "name": "edit",
    "description": "<p>The keys in the <code>files</code> object are the <code>string</code> filename. The value is another <code>object</code> with a key of <code>content</code> (indicating the new contents), or <code>filename</code> (indicating the new filename). For example: <em>Note</em>*: All files from the previous version of the gist are carried over by default if not included in the object. Deletes can be performed by including the filename with a <code>null</code> object. <a href=\"https://developer.github.com/v3/gists/#edit-a-gist\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A description of the gist.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "files",
            "description": "<p>Files that make up this gist.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "content",
            "description": "<p>Updated file contents.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "filename",
            "description": "<p>New name for this file.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.edit({id, description, files, content, filename})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.edit({id, description, files, content, filename}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.edit({id, description, files, content, filename}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "PATCH",
    "url": "/gists/:gist_id/comments/:id",
    "title": "editComment",
    "name": "editComment",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/comments/#edit-a-comment\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gist_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>The comment text.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.editComment({gist_id, id, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.editComment({gist_id, id, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.editComment({gist_id, id, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "POST",
    "url": "/gists/:id/forks",
    "title": "fork",
    "name": "fork",
    "description": "<p><strong>Note</strong>: This was previously <code>/gists/:id/fork</code>. <a href=\"https://developer.github.com/v3/gists/#fork-a-gist\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.fork({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.fork({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.fork({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id",
    "title": "get",
    "name": "get",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/#get-a-single-gist\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.get({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.get({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.get({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists",
    "title": "getAll",
    "name": "getAll",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/#list-a-users-gists\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>A timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only gists updated at or after this time are returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getAll({since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getAll({since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getAll({since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:gist_id/comments/:id",
    "title": "getComment",
    "name": "getComment",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/comments/#get-a-single-comment\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gist_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getComment({gist_id, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getComment({gist_id, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getComment({gist_id, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:gist_id/comments",
    "title": "getComments",
    "name": "getComments",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/comments/#list-comments-on-a-gist\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gist_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getComments({gist_id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getComments({gist_id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getComments({gist_id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id/commits",
    "title": "getCommits",
    "name": "getCommits",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/#list-gist-commits\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getCommits({id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getCommits({id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getCommits({id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/users/:username/gists",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/#list-a-users-gists\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>A timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only gists updated at or after this time are returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getForUser({username, since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getForUser({username, since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getForUser({username, since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id/forks",
    "title": "getForks",
    "name": "getForks",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/#list-gist-forks\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getForks({id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getForks({id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getForks({id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/public",
    "title": "getPublic",
    "name": "getPublic",
    "description": "<p>List all public gists sorted by most recently updated to least recently updated.</p> <p>Note: With <a href=\"https://developer.github.com/v3/#pagination\">pagination</a>, you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page. <a href=\"https://developer.github.com/v3/gists/#list-all-public-gists\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>A timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only gists updated at or after this time are returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getPublic({since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getPublic({since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getPublic({since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/:id/:sha",
    "title": "getRevision",
    "name": "getRevision",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/#get-a-specific-revision-of-a-gist\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getRevision({id, sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getRevision({id, sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getRevision({id, sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "GET",
    "url": "/gists/starred",
    "title": "getStarred",
    "name": "getStarred",
    "description": "<p>List the authenticated user's starred gists: <a href=\"https://developer.github.com/v3/gists/#list-starred-gists\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>A timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only gists updated at or after this time are returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.getStarred({since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.getStarred({since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.getStarred({since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "PUT",
    "url": "/gists/:id/star",
    "title": "star",
    "name": "star",
    "description": "<p>Note that you'll need to set <code>Content-Length</code> to zero when calling out to this endpoint. For more information, see &quot;<a href=\"https://developer.github.com/v3/#http-verbs\">HTTP verbs</a>.&quot; <a href=\"https://developer.github.com/v3/gists/#star-a-gist\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.star({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.star({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.star({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "DELETE",
    "url": "/gists/:id/star",
    "title": "unstar",
    "name": "unstar",
    "description": "<p><a href=\"https://developer.github.com/v3/gists/#unstar-a-gist\">REST API doc</a></p>",
    "group": "Gists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gists.unstar({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gists.unstar({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gists.unstar({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gists"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/blobs",
    "title": "createBlob",
    "name": "createBlob",
    "description": "<p><a href=\"https://developer.github.com/v3/git/blobs/#create-a-blob\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>The new blob's content.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "encoding",
            "description": "<p>utf-8&quot;&quot;]  The encoding used for <code>content</code>. Currently, <code>&quot;utf-8&quot;</code> and <code>&quot;base64&quot;</code> are supported.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.createBlob({owner, repo, content, encoding})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.createBlob({owner, repo, content, encoding}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.createBlob({owner, repo, content, encoding}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/commits",
    "title": "createCommit",
    "name": "createCommit",
    "description": "<p>Creates a new Git <a href=\"https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects\">commit object</a>.</p> <p>The <code>committer</code> section is optional and will be filled with the <code>author</code> data if omitted. If the <code>author</code> section is omitted, it will be filled in with the authenticated user's information and the current date.</p> <p>Both the <code>author</code> and <code>committer</code> parameters have the same keys:</p> <table> <thead> <tr> <th>name</th> <th>type</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>name</td> <td>string</td> <td>The name of the author (or committer) of the commit</td> </tr> <tr> <td>email</td> <td>string</td> <td>The email of the author (or committer) of the commit</td> </tr> <tr> <td>date</td> <td>string</td> <td>Indicates when this commit was authored (or committed). This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</td> </tr> </tbody> </table> <p>You can also provide an optional string <code>signature</code> parameter. This value will be added to the <code>gpgsig</code> header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. <em>Note</em>*: To pass a <code>signature</code> parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to <a href=\"https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work\">use the command line</a> to create signed commits.</p> <p>In this example, the payload that the signature is over would have been:</p> <p><a href=\"https://developer.github.com/v3/git/commits/#create-a-commit\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The commit message</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tree",
            "description": "<p>The SHA of the tree object this commit points to</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "parents",
            "description": "<p>The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "committer",
            "description": "<p>object containing information about the committer.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "author",
            "description": "<p>object containing information about the author.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.createCommit({owner, repo, message, tree, parents, committer, author})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.createCommit({owner, repo, message, tree, parents, committer, author}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.createCommit({owner, repo, message, tree, parents, committer, author}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/refs",
    "title": "createReference",
    "name": "createReference",
    "description": "<p>Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches. <a href=\"https://developer.github.com/v3/git/refs/#create-a-reference\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>The name of the fully qualified reference (ie: <code>refs/heads/master</code>). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": "<p>The SHA1 value for this reference.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.createReference({owner, repo, ref, sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.createReference({owner, repo, ref, sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.createReference({owner, repo, ref, sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/tags",
    "title": "createTag",
    "name": "createTag",
    "description": "<p>Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then <a href=\"https://developer.github.com/v3/git/refs/#create-a-reference\">create</a> the <code>refs/tags/[tag]</code> reference. If you want to create a lightweight tag, you only have to <a href=\"https://developer.github.com/v3/git/refs/#create-a-reference\">create</a> the tag reference - this call would be unnecessary. <a href=\"https://developer.github.com/v3/git/tags/#create-a-tag-object\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag",
            "description": "<p>The tag's name. This is typically a version (e.g., &quot;v0.0.1&quot;).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The tag message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "object",
            "description": "<p>The SHA of the git object this is tagging.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "commit",
              "tree",
              "blob"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>The type of the object we're tagging. Normally this is a <code>commit</code> but it can also be a <code>tree</code> or a <code>blob</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "tagger",
            "description": "<p>An object with information about the individual creating the tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tagger:name",
            "description": "<p>The name of the author of the tag</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tagger:email",
            "description": "<p>The email of the author of the tag</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tagger:date",
            "description": "<p>When this object was tagged. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.createTag({owner, repo, tag, message, object, type, tagger, tagger.name, tagger.email, tagger.date})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.createTag({owner, repo, tag, message, object, type, tagger, tagger.name, tagger.email, tagger.date}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.createTag({owner, repo, tag, message, object, type, tagger, tagger.name, tagger.email, tagger.date}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/git/trees",
    "title": "createTree",
    "name": "createTree",
    "description": "<p>The tree creation API will take nested entries as well. If both a tree and a nested path modifying that tree are specified, it will overwrite the contents of that tree with the new path contents and write a new tree out. <a href=\"https://developer.github.com/v3/git/trees/#create-a-tree\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "tree",
            "description": "<p>Objects (of <code>path</code>, <code>mode</code>, <code>type</code>, and <code>sha</code>) specifying a tree structure</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tree:path",
            "description": "<p>The file referenced in the tree</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "100644",
              "100755",
              "040000",
              "160000",
              "120000"
            ],
            "optional": true,
            "field": "tree:mode",
            "description": "<p>The file mode; one of <code>100644</code> for file (blob), <code>100755</code> for executable (blob), <code>040000</code> for subdirectory (tree), <code>160000</code> for submodule (commit), or <code>120000</code> for a blob that specifies the path of a symlink</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "blob",
              "tree",
              "commit"
            ],
            "optional": true,
            "field": "tree:type",
            "description": "<p>Either <code>blob</code>, <code>tree</code>, or <code>commit</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tree:sha",
            "description": "<p>The SHA1 checksum ID of the object in the tree</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tree:content",
            "description": "<p>The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or <code>tree.sha</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "base_tree",
            "description": "<p>The SHA1 of the tree you want to update with new data. If you don't set this, the commit will be created on top of everything; however, it will only contain your change, the rest of your files will show up as deleted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.createTree({owner, repo, tree, tree[].path, tree[].mode, tree[].type, tree[].sha, tree[].content, base_tree})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.createTree({owner, repo, tree, tree[].path, tree[].mode, tree[].type, tree[].sha, tree[].content, base_tree}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.createTree({owner, repo, tree, tree[].path, tree[].mode, tree[].type, tree[].sha, tree[].content, base_tree}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/git/refs/:ref",
    "title": "deleteReference",
    "name": "deleteReference",
    "description": "<p>Example: Deleting a branch:</p> <pre><code>DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a </code></pre> <p>Example: Deleting a tag:</p> <pre><code>DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0 ``` &lt;a href=&quot;https://developer.github.com/v3/git/refs/#delete-a-reference&quot;&gt;REST API doc&lt;/a&gt;</code></pre>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.deleteReference({owner, repo, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.deleteReference({owner, repo, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.deleteReference({owner, repo, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/blobs/:file_sha",
    "title": "getBlob",
    "name": "getBlob",
    "description": "<p>The <code>content</code> in the response will always be Base64 encoded.</p> <p><em>Note</em>: This API supports blobs up to 100 megabytes in size. <a href=\"https://developer.github.com/v3/git/blobs/#get-a-blob\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file_sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getBlob({owner, repo, file_sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getBlob({owner, repo, file_sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getBlob({owner, repo, file_sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/commits/:commit_sha",
    "title": "getCommit",
    "name": "getCommit",
    "description": "<p>Gets a Git <a href=\"https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects\">commit object</a>. <a href=\"https://developer.github.com/v3/git/commits/#get-a-commit\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "commit_sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getCommit({owner, repo, commit_sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getCommit({owner, repo, commit_sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getCommit({owner, repo, commit_sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/commits/:commit_sha",
    "title": "getCommitSignatureVerification",
    "name": "getCommitSignatureVerification",
    "description": "<p>Gets a Git <a href=\"https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects\">commit object</a>. <a href=\"https://developer.github.com/v3/git/commits/#get-a-commit\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "commit_sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getCommitSignatureVerification({owner, repo, commit_sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getCommitSignatureVerification({owner, repo, commit_sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getCommitSignatureVerification({owner, repo, commit_sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/refs/:ref",
    "title": "getReference",
    "name": "getReference",
    "description": "<p>Returns a branch or tag reference. Other than the <a href=\"https://developer.github.com/v3/git/refs/#get-a-reference\">REST API</a> it always returns a single reference. If the REST API returns with an array then the method responds with an error. <a href=\"https://developer.github.com/v3/git/refs/#get-a-reference\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>Must be formatted as <code>heads/branch</code>, not just <code>branch</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getReference({owner, repo, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getReference({owner, repo, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getReference({owner, repo, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/tags/:tag_sha",
    "title": "getTag",
    "name": "getTag",
    "description": "<p><a href=\"https://developer.github.com/v3/git/tags/#get-a-tag\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getTag({owner, repo, tag_sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getTag({owner, repo, tag_sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getTag({owner, repo, tag_sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/tags/:tag_sha",
    "title": "getTagSignatureVerification",
    "name": "getTagSignatureVerification",
    "description": "<p><a href=\"https://developer.github.com/v3/git/tags/#get-a-tag\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getTagSignatureVerification({owner, repo, tag_sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getTagSignatureVerification({owner, repo, tag_sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getTagSignatureVerification({owner, repo, tag_sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/git/trees/:tree_sha",
    "title": "getTree",
    "name": "getTree",
    "description": "<p>If <code>truncated</code> in the response is <code>true</code>, the number of items in the <code>tree</code> array exceeded our maximum limit. If you need to fetch more items, omit the <code>recursive</code> parameter, and fetch one sub-tree at a time. If you need to fetch even more items, you can clone the repository and iterate over the Git data locally. <a href=\"https://developer.github.com/v3/git/trees/#get-a-tree\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tree_sha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "allowedValues": [
              "1"
            ],
            "optional": true,
            "field": "recursive",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.getTree({owner, repo, tree_sha, recursive})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.getTree({owner, repo, tree_sha, recursive}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.getTree({owner, repo, tree_sha, recursive}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/git/refs/:ref",
    "title": "updateReference",
    "name": "updateReference",
    "description": "<p><a href=\"https://developer.github.com/v3/git/refs/#update-a-reference\">REST API doc</a></p>",
    "group": "Gitdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": "<p>The SHA1 value to set this reference to</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "force",
            "defaultValue": "false",
            "description": "<p>Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to <code>false</code> will make sure you're not overwriting work.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.gitdata.updateReference({owner, repo, ref, sha, force})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.gitdata.updateReference({owner, repo, ref, sha, force}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.gitdata.updateReference({owner, repo, ref, sha, force}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Gitdata"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/assignees",
    "title": "addAssigneesToIssue",
    "name": "addAssigneesToIssue",
    "description": "<p>Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.</p> <p>This example adds two assignees to the existing <code>octocat</code> assignee. <a href=\"https://developer.github.com/v3/issues/assignees/#add-assignees-to-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "assignees",
            "description": "<p>Usernames of people to assign this issue to. <em>NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise.</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.addAssigneesToIssue({owner, repo, number, assignees})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.addAssigneesToIssue({owner, repo, number, assignees}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.addAssigneesToIssue({owner, repo, number, assignees}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "addLabels",
    "name": "addLabels",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/labels/#add-labels-to-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.addLabels({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.addLabels({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.addLabels({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/assignees/:assignee",
    "title": "checkAssignee",
    "name": "checkAssignee",
    "description": "<p>Checks if a user has permission to be assigned to an issue in this repository.</p> <p>If the <code>assignee</code> can be assigned to issues in the repository, a <code>204</code> header with no content is returned.</p> <p>Otherwise a <code>404</code> status code is returned. <a href=\"https://developer.github.com/v3/issues/assignees/#check-assignee\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assignee",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.checkAssignee({owner, repo, assignee})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.checkAssignee({owner, repo, assignee}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.checkAssignee({owner, repo, assignee}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues",
    "title": "create",
    "name": "create",
    "description": "<p>Any user with pull access to a repository can create an issue. <a href=\"https://developer.github.com/v3/issues/#create-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The contents of the issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "assignee",
            "description": "<p>Login for the user that this issue should be assigned to. <em>NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. <strong>This field is deprecated.</strong></em></p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "milestone",
            "description": "<p>The <code>number</code> of the milestone to associate this issue with. <em>NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise.</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "labels",
            "description": "<p>Labels to associate with this issue. <em>NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise.</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "assignees",
            "description": "<p>Logins for Users to assign to this issue. <em>NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.create({owner, repo, title, body, assignee, milestone, labels, assignees}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/comments",
    "title": "createComment",
    "name": "createComment",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/comments/#create-a-comment\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>The contents of the comment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.createComment({owner, repo, number, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.createComment({owner, repo, number, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.createComment({owner, repo, number, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/labels",
    "title": "createLabel",
    "name": "createLabel",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/labels/#create-a-label\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing <code>:strawberry:</code> will render the emoji <img src=\"https://a248.e.akamai.net/assets.github.com/images/icons/emoji/unicode/1f353.png\" alt=\":strawberry:\" title=\":strawberry:\">. For a full list of available emoji and codes, see <a href=\"http://emoji-cheat-sheet.com/\">emoji-cheat-sheet.com</a>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "color",
            "description": "<p>The <a href=\"http://www.color-hex.com/\">hexadecimal color code</a> for the label, without the leading <code>#</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A short description of the label.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.createLabel({owner, repo, name, color, description})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.createLabel({owner, repo, name, color, description}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.createLabel({owner, repo, name, color, description}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/milestones",
    "title": "createMilestone",
    "name": "createMilestone",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/milestones/#create-a-milestone\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the milestone.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>The state of the milestone. Either <code>open</code> or <code>closed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A description of the milestone.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "due_on",
            "description": "<p>The milestone due date. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.createMilestone({owner, repo, title, state, description, due_on})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.createMilestone({owner, repo, title, state, description, due_on}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.createMilestone({owner, repo, title, state, description, due_on}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/comments/:id",
    "title": "deleteComment",
    "name": "deleteComment",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/comments/#delete-a-comment\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.deleteComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.deleteComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.deleteComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/labels/:name",
    "title": "deleteLabel",
    "name": "deleteLabel",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/labels/#delete-a-label\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.deleteLabel({owner, repo, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.deleteLabel({owner, repo, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.deleteLabel({owner, repo, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/milestones/:number",
    "title": "deleteMilestone",
    "name": "deleteMilestone",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/milestones/#delete-a-milestone\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.deleteMilestone({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.deleteMilestone({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.deleteMilestone({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/issues/:number",
    "title": "edit",
    "name": "edit",
    "description": "<p>Issue owners and users with push access can edit an issue. <a href=\"https://developer.github.com/v3/issues/#edit-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>The title of the issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The contents of the issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "assignee",
            "description": "<p>Login for the user that this issue should be assigned to. <strong>This field is deprecated.</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed"
            ],
            "optional": true,
            "field": "state",
            "description": "<p>State of the issue. Either <code>open</code> or <code>closed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "milestone",
            "description": "<p>The <code>number</code> of the milestone to associate this issue with or <code>null</code> to remove current. <em>NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise.</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "labels",
            "description": "<p>Labels to associate with this issue. Pass one or more Labels to <em>replace</em> the set of Labels on this Issue. Send an empty array (<code>[]</code>) to clear all Labels from the Issue. <em>NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise.</em></p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "assignees",
            "description": "<p>Logins for Users to assign to this issue. Pass one or more user logins to <em>replace</em> the set of assignees on this Issue. Send an empty array (<code>[]</code>) to clear all assignees from the Issue. <em>NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.edit({owner, repo, number, title, body, assignee, state, milestone, labels, assignees})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.edit({owner, repo, number, title, body, assignee, state, milestone, labels, assignees}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.edit({owner, repo, number, title, body, assignee, state, milestone, labels, assignees}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/issues/comments/:id",
    "title": "editComment",
    "name": "editComment",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/comments/#edit-a-comment\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>The contents of the comment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.editComment({owner, repo, id, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.editComment({owner, repo, id, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.editComment({owner, repo, id, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number",
    "title": "get",
    "name": "get",
    "description": "<p><strong>Note</strong>: In the past, pull requests and issues were more closely aligned than they are now. As far as the API is concerned, every pull request is an issue, but not every issue is a pull request.</p> <p>This endpoint may also return pull requests in the response. If an issue <em>is</em> a pull request, the object will include a <code>pull_request</code> key. <a href=\"https://developer.github.com/v3/issues/#get-a-single-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.get({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.get({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.get({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/issues",
    "title": "getAll",
    "name": "getAll",
    "description": "<p><strong>Note</strong>: In the past, pull requests and issues were more closely aligned than they are now. As far as the API is concerned, every pull request is an issue, but not every issue is a pull request.</p> <p>This endpoint may also return pull requests in the response. If an issue <em>is</em> a pull request, the object will include a <code>pull_request</code> key.</p> <p>You can use the <code>filter</code> query parameter to fetch issues that are not necessarily assigned to you. See the table below for more information. <em>Note:</em>* If a user opened an issue via a GitHub App, the <code>performed_via_github_app</code> key contains information on that GitHub App. <a href=\"https://developer.github.com/v3/issues/#list-issues\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "assigned",
              "created",
              "mentioned",
              "subscribed",
              "all"
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "assigned",
            "description": "<p>Indicates which sorts of issues to return. Can be one of:<br> * <code>assigned</code>: Issues assigned to you<br> * <code>created</code>: Issues created by you<br> * <code>mentioned</code>: Issues mentioning you<br> * <code>subscribed</code>: Issues you're subscribed to updates for<br> * <code>all</code>: All issues the authenticated user can see, regardless of participation or creation</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>Indicates the state of the issues to return. Can be either <code>open</code>, <code>closed</code>, or <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "labels",
            "description": "<p>A list of comma separated label names. Example: <code>bug,ui,@high</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "comments"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>What to sort results by. Can be either <code>created</code>, <code>updated</code>, <code>comments</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": "<p>The direction of the sort. Can be either <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getAll({filter, state, labels, sort, direction, since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getAll({filter, state, labels, sort, direction, since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getAll({filter, state, labels, sort, direction, since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/assignees",
    "title": "getAssignees",
    "name": "getAssignees",
    "description": "<p>Lists the <a href=\"https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/\">available assignees</a> for issues in a repository. <a href=\"https://developer.github.com/v3/issues/assignees/#list-assignees\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getAssignees({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getAssignees({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getAssignees({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/comments/:id",
    "title": "getComment",
    "name": "getComment",
    "description": "<p><em>Note:</em>* If a user created an issue comment via a GitHub App, the <code>performed_via_github_app</code> key will contain information on that GitHub App. <a href=\"https://developer.github.com/v3/issues/comments/#get-a-single-comment\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getComment({owner, repo, id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getComment({owner, repo, id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getComment({owner, repo, id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/comments",
    "title": "getComments",
    "name": "getComments",
    "description": "<p>Issue Comments are ordered by ascending ID. <a href=\"https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>Only comments updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getComments({owner, repo, number, since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getComments({owner, repo, number, since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getComments({owner, repo, number, since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/comments",
    "title": "getCommentsForRepo",
    "name": "getCommentsForRepo",
    "description": "<p>By default, Issue Comments are ordered by ascending ID. <a href=\"https://developer.github.com/v3/issues/comments/#list-comments-in-a-repository\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>Either <code>created</code> or <code>updated</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "description": "<p>Either <code>asc</code> or <code>desc</code>. Ignored without the <code>sort</code> parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>Only comments updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getCommentsForRepo({owner, repo, sort, direction, since})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getCommentsForRepo({owner, repo, sort, direction, since}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getCommentsForRepo({owner, repo, sort, direction, since}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/events/:id",
    "title": "getEvent",
    "name": "getEvent",
    "description": "<p><em>Note:</em>* If the event was triggered by a user via a GitHub App, the <code>performed_via_github_app</code> key will contain information on that GitHub App. <a href=\"https://developer.github.com/v3/issues/events/#get-a-single-event\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getEvent({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getEvent({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getEvent({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/events",
    "title": "getEvents",
    "name": "getEvents",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/events/#list-events-for-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getEvents({owner, repo, number, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getEvents({owner, repo, number, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getEvents({owner, repo, number, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/events",
    "title": "getEventsForRepo",
    "name": "getEventsForRepo",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/events/#list-events-for-a-repository\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getEventsForRepo({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getEventsForRepo({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getEventsForRepo({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/timeline",
    "title": "getEventsTimeline",
    "name": "getEventsTimeline",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/timeline/#list-events-for-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getEventsTimeline({owner, repo, number, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getEventsTimeline({owner, repo, number, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getEventsTimeline({owner, repo, number, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/issues",
    "title": "getForOrg",
    "name": "getForOrg",
    "description": "<p><strong>Note</strong>: In the past, pull requests and issues were more closely aligned than they are now. As far as the API is concerned, every pull request is an issue, but not every issue is a pull request.</p> <p>This endpoint may also return pull requests in the response. If an issue <em>is</em> a pull request, the object will include a <code>pull_request</code> key.</p> <p>You can use the <code>filter</code> query parameter to fetch issues that are not necessarily assigned to you. See the table below for more information. <em>Note:</em>* If a user opened an issue via a GitHub App, the <code>performed_via_github_app</code> key contains information on that GitHub App. <a href=\"https://developer.github.com/v3/issues/#list-issues\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "assigned",
              "created",
              "mentioned",
              "subscribed",
              "all"
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "assigned",
            "description": "<p>Indicates which sorts of issues to return. Can be one of:<br> * <code>assigned</code>: Issues assigned to you<br> * <code>created</code>: Issues created by you<br> * <code>mentioned</code>: Issues mentioning you<br> * <code>subscribed</code>: Issues you're subscribed to updates for<br> * <code>all</code>: All issues the authenticated user can see, regardless of participation or creation</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>Indicates the state of the issues to return. Can be either <code>open</code>, <code>closed</code>, or <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "labels",
            "description": "<p>A list of comma separated label names. Example: <code>bug,ui,@high</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "comments"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>What to sort results by. Can be either <code>created</code>, <code>updated</code>, <code>comments</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": "<p>The direction of the sort. Can be either <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getForOrg({org, filter, state, labels, sort, direction, since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getForOrg({org, filter, state, labels, sort, direction, since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getForOrg({org, filter, state, labels, sort, direction, since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues",
    "title": "getForRepo",
    "name": "getForRepo",
    "description": "<p><strong>Note</strong>: In the past, pull requests and issues were more closely aligned than they are now. As far as the API is concerned, every pull request is an issue, but not every issue is a pull request.</p> <p>This endpoint may also return pull requests in the response. If an issue <em>is</em> a pull request, the object will include a <code>pull_request</code> key. <em>Note:</em>* If a user opened an issue via a GitHub App, the <code>performed_via_github_app</code> key contains information on that GitHub App. <a href=\"https://developer.github.com/v3/issues/#list-issues-for-a-repository\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "milestone",
            "description": "<p>If an <code>integer</code> is passed, it should refer to a milestone by its <code>number</code> field. If the string <code>*</code> is passed, issues with any milestone are accepted. If the string <code>none</code> is passed, issues without milestones are returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>Indicates the state of the issues to return. Can be either <code>open</code>, <code>closed</code>, or <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "assignee",
            "description": "<p>Can be the name of a user. Pass in <code>none</code> for issues with no assigned user, and <code>*</code> for issues assigned to any user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "creator",
            "description": "<p>The user that created the issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "mentioned",
            "description": "<p>A user that's mentioned in the issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "labels",
            "description": "<p>A list of comma separated label names. Example: <code>bug,ui,@high</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "comments"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>What to sort results by. Can be either <code>created</code>, <code>updated</code>, <code>comments</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": "<p>The direction of the sort. Can be either <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getForRepo({owner, repo, milestone, state, assignee, creator, mentioned, labels, sort, direction, since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getForRepo({owner, repo, milestone, state, assignee, creator, mentioned, labels, sort, direction, since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getForRepo({owner, repo, milestone, state, assignee, creator, mentioned, labels, sort, direction, since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/user/issues",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p><strong>Note</strong>: In the past, pull requests and issues were more closely aligned than they are now. As far as the API is concerned, every pull request is an issue, but not every issue is a pull request.</p> <p>This endpoint may also return pull requests in the response. If an issue <em>is</em> a pull request, the object will include a <code>pull_request</code> key.</p> <p>You can use the <code>filter</code> query parameter to fetch issues that are not necessarily assigned to you. See the table below for more information. <em>Note:</em>* If a user opened an issue via a GitHub App, the <code>performed_via_github_app</code> key contains information on that GitHub App. <a href=\"https://developer.github.com/v3/issues/#list-issues\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "assigned",
              "created",
              "mentioned",
              "subscribed",
              "all"
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "assigned",
            "description": "<p>Indicates which sorts of issues to return. Can be one of:<br> * <code>assigned</code>: Issues assigned to you<br> * <code>created</code>: Issues created by you<br> * <code>mentioned</code>: Issues mentioning you<br> * <code>subscribed</code>: Issues you're subscribed to updates for<br> * <code>all</code>: All issues the authenticated user can see, regardless of participation or creation</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>Indicates the state of the issues to return. Can be either <code>open</code>, <code>closed</code>, or <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "labels",
            "description": "<p>A list of comma separated label names. Example: <code>bug,ui,@high</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "comments"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>What to sort results by. Can be either <code>created</code>, <code>updated</code>, <code>comments</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "desc",
            "description": "<p>The direction of the sort. Can be either <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getForUser({filter, state, labels, sort, direction, since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getForUser({filter, state, labels, sort, direction, since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getForUser({filter, state, labels, sort, direction, since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "getIssueLabels",
    "name": "getIssueLabels",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/labels/#list-labels-on-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getIssueLabels({owner, repo, number, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getIssueLabels({owner, repo, number, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getIssueLabels({owner, repo, number, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/labels/:name",
    "title": "getLabel",
    "name": "getLabel",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/labels/#get-a-single-label\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getLabel({owner, repo, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getLabel({owner, repo, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getLabel({owner, repo, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/labels",
    "title": "getLabels",
    "name": "getLabels",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/labels/#list-all-labels-for-this-repository\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getLabels({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getLabels({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getLabels({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/milestones/:number",
    "title": "getMilestone",
    "name": "getMilestone",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/milestones/#get-a-single-milestone\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getMilestone({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getMilestone({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getMilestone({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/milestones/:number/labels",
    "title": "getMilestoneLabels",
    "name": "getMilestoneLabels",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/labels/#get-labels-for-every-issue-in-a-milestone\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getMilestoneLabels({owner, repo, number, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getMilestoneLabels({owner, repo, number, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getMilestoneLabels({owner, repo, number, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/milestones",
    "title": "getMilestones",
    "name": "getMilestones",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/milestones/#list-milestones-for-a-repository\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>The state of the milestone. Either <code>open</code>, <code>closed</code>, or <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "due_on",
              "completeness"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "due_on",
            "description": "<p>What to sort results by. Either <code>due_on</code> or <code>completeness</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "asc",
            "description": "<p>The direction of the sort. Either <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.getMilestones({owner, repo, state, sort, direction, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.getMilestones({owner, repo, state, sort, direction, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.getMilestones({owner, repo, state, sort, direction, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/issues/:number/lock",
    "title": "lock",
    "name": "lock",
    "description": "<p>Users with push access can lock an issue or pull request's conversation.</p> <p>Note that, if you choose not to pass any parameters, you'll need to set <code>Content-Length</code> to zero when calling out to this endpoint. For more information, see &quot;<a href=\"https://developer.github.com/v3/#http-verbs\">HTTP verbs</a>.&quot; <a href=\"https://developer.github.com/v3/issues/#lock-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "off-topic",
              "too",
              "heated",
              "resolved",
              "spam"
            ],
            "optional": true,
            "field": "lock_reason",
            "description": "<p>The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:<br> * <code>off-topic</code><br> * <code>too heated</code><br> * <code>resolved</code><br> * <code>spam</code></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.lock({owner, repo, number, lock_reason})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.lock({owner, repo, number, lock_reason}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.lock({owner, repo, number, lock_reason}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "removeAllLabels",
    "name": "removeAllLabels",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/labels/#remove-all-labels-from-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.removeAllLabels({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.removeAllLabels({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.removeAllLabels({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/assignees",
    "title": "removeAssigneesFromIssue",
    "name": "removeAssigneesFromIssue",
    "description": "<p>Removes one or more assignees from an issue.</p> <p>This example removes two of three assignees, leaving the <code>octocat</code> assignee. <a href=\"https://developer.github.com/v3/issues/assignees/#remove-assignees-from-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "assignees",
            "description": "<p>Usernames of assignees to remove from an issue. <em>NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise.</em></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.removeAssigneesFromIssue({owner, repo, number, assignees})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.removeAssigneesFromIssue({owner, repo, number, assignees}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.removeAssigneesFromIssue({owner, repo, number, assignees}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/labels/:name",
    "title": "removeLabel",
    "name": "removeLabel",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/labels/#remove-a-label-from-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.removeLabel({owner, repo, number, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.removeLabel({owner, repo, number, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.removeLabel({owner, repo, number, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/issues/:number/labels",
    "title": "replaceAllLabels",
    "name": "replaceAllLabels",
    "description": "<p>Sending an empty array (<code>[]</code>) will remove all Labels from the Issue. <a href=\"https://developer.github.com/v3/issues/labels/#replace-all-labels-for-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.replaceAllLabels({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.replaceAllLabels({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.replaceAllLabels({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/issues/:number/lock",
    "title": "unlock",
    "name": "unlock",
    "description": "<p>Users with push access can unlock an issue's conversation. <a href=\"https://developer.github.com/v3/issues/#unlock-an-issue\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.unlock({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.unlock({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.unlock({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/labels/:oldname",
    "title": "updateLabel",
    "name": "updateLabel",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/labels/#update-a-label\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing <code>:strawberry:</code> will render the emoji <img src=\"https://a248.e.akamai.net/assets.github.com/images/icons/emoji/unicode/1f353.png\" alt=\":strawberry:\" title=\":strawberry:\">. For a full list of available emoji and codes, see <a href=\"http://emoji-cheat-sheet.com/\">emoji-cheat-sheet.com</a>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "color",
            "description": "<p>The <a href=\"http://www.color-hex.com/\">hexadecimal color code</a> for the label, without the leading <code>#</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A short description of the label.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.updateLabel({owner, repo, oldname, name, color, description})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.updateLabel({owner, repo, oldname, name, color, description}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.updateLabel({owner, repo, oldname, name, color, description}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/milestones/:number",
    "title": "updateMilestone",
    "name": "updateMilestone",
    "description": "<p><a href=\"https://developer.github.com/v3/issues/milestones/#update-a-milestone\">REST API doc</a></p>",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>The title of the milestone.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>The state of the milestone. Either <code>open</code> or <code>closed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A description of the milestone.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "due_on",
            "description": "<p>The milestone due date. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.issues.updateMilestone({owner, repo, number, title, state, description, due_on}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Issues"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/import",
    "title": "cancelImport",
    "name": "cancelImport",
    "description": "<p>Stop an import for a repository. <a href=\"https://developer.github.com/v3/migration/source_imports/#cancel-an-import\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.cancelImport({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.cancelImport({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.cancelImport({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/migrations/:id/archive",
    "title": "deleteMigrationArchive",
    "name": "deleteMigrationArchive",
    "description": "<p>Deletes a previous migration archive. Migration archives are automatically deleted after seven days. <a href=\"https://developer.github.com/v3/migration/migrations/#delete-a-migration-archive\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.deleteMigrationArchive({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.deleteMigrationArchive({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.deleteMigrationArchive({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/import/authors",
    "title": "getImportCommitAuthors",
    "name": "getImportCommitAuthors",
    "description": "<p>Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username <code>hubot</code> into something like <code>hubot &lt;hubot@12341234-abab-fefe-8787-fedcba987654&gt;</code>.</p> <p>This API method and the &quot;Map a commit author&quot; method allow you to provide correct Git author information. <a href=\"https://developer.github.com/v3/migration/source_imports/#get-commit-authors\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the <code>raw</code> step.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getImportCommitAuthors({owner, repo, since})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getImportCommitAuthors({owner, repo, since}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getImportCommitAuthors({owner, repo, since}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/import",
    "title": "getImportProgress",
    "name": "getImportProgress",
    "description": "<p>View the progress of an import. <em>Import status</em>*</p> <p>This section includes details about the possible values of the <code>status</code> field of the Import Progress response.</p> <p>An import that does not have errors will progress through these steps: <code>detecting</code> - the &quot;detection&quot; step of the import is in progress because the request did not include a <code>vcs</code> parameter. The import is identifying the type of source control present at the URL. <code>importing</code> - the &quot;raw&quot; step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include <code>commit_count</code> (the total number of raw commits that will be imported) and <code>percent</code> (0 - 100, the current progress through the import). <code>mapping</code> - the &quot;rewrite&quot; step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information. <code>pushing</code> - the &quot;push&quot; step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include <code>push_percent</code>, which is the percent value reported by <code>git push</code> when it is &quot;Writing objects&quot;. <code>complete</code> - the import is complete, and the repository is ready on GitHub.</p> <p>If there are problems, you will see one of these in the <code>status</code> field: <code>auth_failed</code> - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the <a href=\"#update-existing-import\">Update Existing Import</a> section. <code>error</code> - the import encountered an error. The import progress response will include the <code>failed_step</code> and an error message. Contact <a href=\"https://github.com/contact\">GitHub support</a> for more information. <code>detection_needs_auth</code> - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the <a href=\"#update-existing-import\">Update Existing Import</a> section. <code>detection_found_nothing</code> - the importer didn't recognize any source control at the URL. To resolve, <a href=\"#cancel-an-import\">Cancel the import</a> and <a href=\"#start-an-import\">retry</a> with the correct URL. <code>detection_found_multiple</code> - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a <code>project_choices</code> field with the possible project choices as values. To update project choice, please see the <a href=\"#update-existing-import\">Update Existing Import</a> section. <em>The project_choices field</em>*</p> <p>When multiple projects are found at the provided URL, the response hash will include a <code>project_choices</code> field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type. <em>Git LFS related fields</em>*</p> <p>This section includes details about Git LFS related fields that may be present in the Import Progress response. <code>use_lfs</code> - describes whether the import has been opted in or out of using Git LFS. The value can be <code>opt_in</code>, <code>opt_out</code>, or <code>undecided</code> if no action has been taken. <code>has_large_files</code> - the boolean value describing whether files larger than 100MB were found during the <code>importing</code> step. <code>large_files_size</code> - the total size in gigabytes of files larger than 100MB found in the originating repository. <code>large_files_count</code> - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a &quot;Get Large Files&quot; request. <a href=\"https://developer.github.com/v3/migration/source_imports/#get-import-progress\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getImportProgress({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getImportProgress({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getImportProgress({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/import/large_files",
    "title": "getLargeImportFiles",
    "name": "getLargeImportFiles",
    "description": "<p>List files larger than 100MB found during the import <a href=\"https://developer.github.com/v3/migration/source_imports/#get-large-files\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getLargeImportFiles({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getLargeImportFiles({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getLargeImportFiles({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/migrations/:id/archive",
    "title": "getMigrationArchiveLink",
    "name": "getMigrationArchiveLink",
    "description": "<p>Fetches the URL to a migration archive.</p> <p><a href=\"https://developer.github.com/v3/migration/migrations/#download-a-migration-archive\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getMigrationArchiveLink({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getMigrationArchiveLink({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getMigrationArchiveLink({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/migrations/:id",
    "title": "getMigrationStatus",
    "name": "getMigrationStatus",
    "description": "<p>Fetches the status of a migration.</p> <p>The <code>state</code> of a migration can be one of the following values: <code>pending</code>, which means the migration hasn't started yet. <code>exporting</code>, which means the migration is in progress. <code>exported</code>, which means the migration finished successfully. <code>failed</code>, which means the migration failed. <a href=\"https://developer.github.com/v3/migration/migrations/#get-the-status-of-a-migration\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getMigrationStatus({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getMigrationStatus({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getMigrationStatus({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/migrations",
    "title": "getMigrations",
    "name": "getMigrations",
    "description": "<p>Lists the most recent migrations. <a href=\"https://developer.github.com/v3/migration/migrations/#get-a-list-of-migrations\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.getMigrations({org, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.getMigrations({org, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.getMigrations({org, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/import/authors/:author_id",
    "title": "mapImportCommitAuthor",
    "name": "mapImportCommitAuthor",
    "description": "<p>Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository. <a href=\"https://developer.github.com/v3/migration/source_imports/#map-a-commit-author\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>The new Git author email.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The new Git author name.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.mapImportCommitAuthor({owner, repo, author_id, email, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.mapImportCommitAuthor({owner, repo, author_id, email, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.mapImportCommitAuthor({owner, repo, author_id, email, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/import/lfs",
    "title": "setImportLfsPreference",
    "name": "setImportLfsPreference",
    "description": "<p>You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by <a href=\"https://git-lfs.github.com\">Git LFS</a>. You can learn more about our LFS feature and working with large files <a href=\"https://help.github.com/articles/versioning-large-files/\">on our help site</a>. <a href=\"https://developer.github.com/v3/migration/source_imports/#set-git-lfs-preference\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "opt_in",
              "opt_out"
            ],
            "optional": false,
            "field": "use_lfs",
            "description": "<p>Can be one of <code>opt_in</code> (large files will be stored using Git LFS) or <code>opt_out</code> (large files will be removed during the import).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.setImportLfsPreference({owner, repo, use_lfs})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.setImportLfsPreference({owner, repo, use_lfs}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.setImportLfsPreference({owner, repo, use_lfs}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/import",
    "title": "startImport",
    "name": "startImport",
    "description": "<p>Start a source import to a GitHub repository using GitHub Importer. <a href=\"https://developer.github.com/v3/migration/source_imports/#start-an-import\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "vcs_url",
            "description": "<p>The URL of the originating repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "subversion",
              "git",
              "mercurial",
              "tfvc"
            ],
            "optional": true,
            "field": "vcs",
            "description": "<p>The originating VCS type. Can be one of <code>subversion</code>, <code>git</code>, <code>mercurial</code>, or <code>tfvc</code>. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "vcs_username",
            "description": "<p>If authentication is required, the username to provide to <code>vcs_url</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "vcs_password",
            "description": "<p>If authentication is required, the password to provide to <code>vcs_url</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tfvc_project",
            "description": "<p>For a tfvc import, the name of the project that is being imported.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.startImport({owner, repo, vcs_url, vcs, vcs_username, vcs_password, tfvc_project}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/migrations",
    "title": "startMigration",
    "name": "startMigration",
    "description": "<p>Initiates the generation of a migration archive. <a href=\"https://developer.github.com/v3/migration/migrations/#start-a-migration\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "repositories",
            "description": "<p>A list of arrays indicating which repositories should be migrated.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "lock_repositories",
            "defaultValue": "false",
            "description": "<p>Indicates whether repositories should be locked (to prevent manipulation) while migrating data.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "exclude_attachments",
            "defaultValue": "false",
            "description": "<p>Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.startMigration({org, repositories, lock_repositories, exclude_attachments})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.startMigration({org, repositories, lock_repositories, exclude_attachments}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.startMigration({org, repositories, lock_repositories, exclude_attachments}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/migrations/:id/repos/:repo_name/lock",
    "title": "unlockRepoLockedForMigration",
    "name": "unlockRepoLockedForMigration",
    "description": "<p>Unlocks a repository that was locked for migration. You should unlock each migrated repository and <a href=\"https://developer.github.com/v3/repos/#delete-a-repository\">delete them</a> when the migration is complete and you no longer need the source data. <a href=\"https://developer.github.com/v3/migration/migrations/#unlock-a-repository\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo_name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.unlockRepoLockedForMigration({org, id, repo_name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.unlockRepoLockedForMigration({org, id, repo_name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.unlockRepoLockedForMigration({org, id, repo_name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/import",
    "title": "updateImport",
    "name": "updateImport",
    "description": "<p>An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API request. If no parameters are provided, the import will be restarted.</p> <p>Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will have the status <code>detection_found_multiple</code> and the Import Progress response will include a <code>project_choices</code> array. You can select the project to import by providing one of the objects in the <code>project_choices</code> array in the update request.</p> <p>The following example demonstrates the workflow for updating an import with &quot;project1&quot; as the project choice. Given a <code>project_choices</code> array like such:</p> <p>To restart an import, no parameters are provided in the update request. <a href=\"https://developer.github.com/v3/migration/source_imports/#update-existing-import\">REST API doc</a></p>",
    "group": "Migrations",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "vcs_username",
            "description": "<p>The username to provide to the originating repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "vcs_password",
            "description": "<p>The password to provide to the originating repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.migrations.updateImport({owner, repo, vcs_username, vcs_password}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Migrations"
  },
  {
    "type": "GET",
    "url": "/codes_of_conduct/:key",
    "title": "getCodeOfConduct",
    "name": "getCodeOfConduct",
    "description": "<p><a href=\"https://developer.github.com/v3/codes_of_conduct/#get-an-individual-code-of-conduct\">REST API doc</a></p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getCodeOfConduct({key})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getCodeOfConduct({key}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getCodeOfConduct({key}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/codes_of_conduct",
    "title": "getCodesOfConduct",
    "name": "getCodesOfConduct",
    "description": "<p><a href=\"https://developer.github.com/v3/codes_of_conduct/#list-all-codes-of-conduct\">REST API doc</a></p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getCodesOfConduct({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getCodesOfConduct({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getCodesOfConduct({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/gitignore/templates/:name",
    "title": "getGitignoreTemplate",
    "name": "getGitignoreTemplate",
    "description": "<p>The API also allows fetching the source of a single template.</p> <p>Use the raw <a href=\"https://developer.github.com/v3/media/\">media type</a> to get the raw contents.</p> <p><a href=\"https://developer.github.com/v3/gitignore/#get-a-single-template\">REST API doc</a></p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getGitignoreTemplate({name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getGitignoreTemplate({name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getGitignoreTemplate({name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/gitignore/templates",
    "title": "getGitignoreTemplates",
    "name": "getGitignoreTemplates",
    "description": "<p>List all templates available to pass as an option when <a href=\"https://developer.github.com/v3/repos/#create\">creating a repository</a>. <a href=\"https://developer.github.com/v3/gitignore/#listing-available-templates\">REST API doc</a></p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getGitignoreTemplates({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getGitignoreTemplates({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getGitignoreTemplates({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/licenses/:license",
    "title": "getLicense",
    "name": "getLicense",
    "description": "<p><a href=\"https://developer.github.com/v3/licenses/#get-an-individual-license\">REST API doc</a></p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "license",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getLicense({license})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getLicense({license}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getLicense({license}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/licenses",
    "title": "getLicenses",
    "name": "getLicenses",
    "description": "<p><a href=\"https://developer.github.com/v3/licenses/#list-all-licenses\">REST API doc</a></p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getLicenses({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getLicenses({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getLicenses({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/rate_limit",
    "title": "getRateLimit",
    "name": "getRateLimit",
    "description": "<p>Note: Accessing this endpoint does not count against your rate limit. <em>Understanding Your Rate Limit Status</em>*</p> <p>The Search API has a <a href=\"https://developer.github.com/v3/search/#rate-limit\">custom rate limit</a>, separate from the rate limit governing the rest of the API. For that reason, the response (shown above) categorizes your rate limit by resource. Within the <code>&quot;resources&quot;</code> object, the <code>&quot;search&quot;</code> object provides your rate limit status for the <a href=\"https://developer.github.com/v3/search\">Search API</a>. The <code>&quot;core&quot;</code> object provides your rate limit status for all the <em>rest</em> of the API.</p> <p>The <code>&quot;rate&quot;</code> object (shown at the bottom of the response above) is deprecated.</p> <p>If you're writing new API client code (or updating your existing code), you should use the <code>&quot;core&quot;</code> object instead of the <code>&quot;rate&quot;</code> object. The <code>&quot;core&quot;</code> object contains the same information that is present in the <code>&quot;rate&quot;</code> object. <a href=\"https://developer.github.com/v3/rate_limit/#get-your-current-rate-limit-status\">REST API doc</a></p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getRateLimit({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getRateLimit({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getRateLimit({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/community/code_of_conduct",
    "title": "getRepoCodeOfConduct",
    "name": "getRepoCodeOfConduct",
    "description": "<p>This method returns the contents of the repository's code of conduct file, if one is detected. <a href=\"https://developer.github.com/v3/codes_of_conduct/#get-the-contents-of-a-repositorys-code-of-conduct\">REST API doc</a></p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getRepoCodeOfConduct({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getRepoCodeOfConduct({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getRepoCodeOfConduct({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/license",
    "title": "getRepoLicense",
    "name": "getRepoLicense",
    "description": "<p>This method returns the contents of the repository's license file, if one is detected.</p> <p>Similar to <a href=\"https://developer.github.com/v3/repos/contents/#get-contents\">the repository contents API</a>, this method also supports <a href=\"https://developer.github.com/v3/repos/contents/#custom-media-types\">custom media types</a> for retrieving the raw license content or rendered license HTML. <a href=\"https://developer.github.com/v3/licenses/#get-the-contents-of-a-repositorys-license\">REST API doc</a></p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.getRepoLicense({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.getRepoLicense({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.getRepoLicense({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "POST",
    "url": "/markdown",
    "title": "renderMarkdown",
    "name": "renderMarkdown",
    "description": "<p><a href=\"https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document\">REST API doc</a></p>",
    "group": "Misc",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "text",
            "description": "<p>The Markdown text to render in HTML. Markdown content must be 400 KB or less.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "markdown",
              "gfm"
            ],
            "optional": true,
            "field": "mode",
            "defaultValue": "markdown",
            "description": "<p>The rendering mode. Can be either:<br> * <code>markdown</code> to render a document in plain Markdown, just like README.md files are rendered.<br> * <code>gfm</code> to render a document in <a href=\"https://github.github.com/gfm/\">GitHub Flavored Markdown</a>, which creates links for user mentions as well as references to SHA-1 hashes, issues, and pull requests.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "context",
            "description": "<p>The repository context to use when creating references in <code>gfm</code> mode. Omit this parameter when using <code>markdown</code> mode.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.renderMarkdown({text, mode, context})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.renderMarkdown({text, mode, context}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.renderMarkdown({text, mode, context}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "POST",
    "url": "/markdown/raw",
    "title": "renderMarkdownRaw",
    "name": "renderMarkdownRaw",
    "description": "<p>You must send Markdown as plain text (using a <code>Content-Type</code> header of <code>text/plain</code> or <code>text/x-markdown</code>) to this endpoint, rather than using JSON format. In raw mode, <a href=\"https://github.github.com/gfm/\">GitHub Flavored Markdown</a> is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.</p> <p><a href=\"https://developer.github.com/v3/markdown/#render-a-markdown-document-in-raw-mode\">REST API doc</a></p>",
    "group": "Misc",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.misc.renderMarkdownRaw({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.misc.renderMarkdownRaw({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.misc.renderMarkdownRaw({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/memberships/:username",
    "title": "addOrgMembership",
    "name": "addOrgMembership",
    "description": "<p>Only authenticated organization owners can add a member to the organization or update the member's role. If the authenticated user is <em>adding</em> a member to the organization, the invited user will receive an email inviting them to the organization. The user's <a href=\"#get-organization-membership\">membership status</a> will be <code>pending</code> until they accept the invitation. Authenticated users can <em>update</em> a user's membership by passing the <code>role</code> parameter. If the authenticated user changes a member's role to <code>admin</code>, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to <code>member</code>, no email will be sent. <em>Rate limits</em>*</p> <p>To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period. <a href=\"https://developer.github.com/v3/orgs/members/#add-or-update-organization-membership\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "admin",
              "member"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "member",
            "description": "<p>The role to give the user in the organization. Can be one of:<br> * <code>admin</code> - The user will become an owner of the organization.<br> * <code>member</code> - The user will become a non-owner member of the organization.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.addOrgMembership({org, username, role})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.addOrgMembership({org, username, role}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.addOrgMembership({org, username, role}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PUT",
    "url": "/teams/:id/memberships/:username",
    "title": "addTeamMembership",
    "name": "addTeamMembership",
    "description": "<p>If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a maintainer of the team.</p> <p>If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the &quot;pending&quot; state until the user accepts the invitation, at which point the membership will transition to the &quot;active&quot; state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.</p> <p>If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a maintainer of the team.</p> <p>If you attempt to add an organization to a team, you will get this: <a href=\"https://developer.github.com/v3/teams/members/#add-or-update-team-membership\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "member",
              "maintainer"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "member",
            "description": "<p>The role that this user should have in the team. Can be one of:<br> * <code>member</code> - a normal member of the team.<br> * <code>maintainer</code> - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.addTeamMembership({id, username, role})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.addTeamMembership({id, username, role}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.addTeamMembership({id, username, role}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PUT",
    "url": "/teams/:id/repos/:owner/:repo",
    "title": "addTeamRepo",
    "name": "addTeamRepo",
    "description": "<p>To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization.</p> <p>If you pass the <code>hellcat-preview</code> media type, you can modify repository permissions of child teams.</p> <p>Note that, if you choose not to pass any parameters, you'll need to set <code>Content-Length</code> to zero when calling out to this endpoint. For more information, see &quot;<a href=\"https://developer.github.com/v3/#http-verbs\">HTTP verbs</a>.&quot;</p> <p><a href=\"https://developer.github.com/v3/teams/#add-or-update-team-repository\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "pull",
              "push",
              "admin"
            ],
            "optional": true,
            "field": "permission",
            "description": "<p>The permission to grant the team on this repository. Can be one of:<br> * <code>pull</code> - team members can pull, but not push to or administer this repository.<br> * <code>push</code> - team members can pull and push, but not administer this repository.<br> * <code>admin</code> - team members can pull, push and administer this repository.</p> <p>If no permission is specified, the team's <code>permission</code> attribute will be used to determine what permission to grant the team on this repository.<br> <em>Note</em>*: If you pass the <code>hellcat-preview</code> media type, you can promote—but not demote—a <code>permission</code> attribute inherited through a parent team.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.addTeamRepo({id, owner, repo, permission})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.addTeamRepo({id, owner, repo, permission}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.addTeamRepo({id, owner, repo, permission}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/blocks/:username",
    "title": "blockUser",
    "name": "blockUser",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/blocking/#block-a-user\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.blockUser({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.blockUser({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.blockUser({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/blocks/:username",
    "title": "checkBlockedUser",
    "name": "checkBlockedUser",
    "description": "<p>If the user is blocked:</p> <p>If the user is not blocked: <a href=\"https://developer.github.com/v3/orgs/blocking/#check-whether-a-user-is-blocked-from-an-organization\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.checkBlockedUser({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.checkBlockedUser({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.checkBlockedUser({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/members/:username",
    "title": "checkMembership",
    "name": "checkMembership",
    "description": "<p>Check if a user is, publicly or privately, a member of the organization. <a href=\"https://developer.github.com/v3/orgs/members/#check-membership\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.checkMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.checkMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.checkMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/public_members/:username",
    "title": "checkPublicMembership",
    "name": "checkPublicMembership",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/members/#check-public-membership\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.checkPublicMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.checkPublicMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.checkPublicMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/repos/:owner/:repo",
    "title": "checkTeamRepo",
    "name": "checkTeamRepo",
    "description": "<p><strong>Note</strong>: If you pass the <code>hellcat-preview</code> media type, repositories inherited through a parent team will be checked.</p> <p>You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom <a href=\"https://developer.github.com/v3/media/\">media type</a> via the <code>Accept</code> header: <a href=\"https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.checkTeamRepo({id, owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.checkTeamRepo({id, owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.checkTeamRepo({id, owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/public_members/:username",
    "title": "concealMembership",
    "name": "concealMembership",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/members/#conceal-a-users-membership\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.concealMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.concealMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.concealMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/outside_collaborators/:username",
    "title": "convertMemberToOutsideCollaborator",
    "name": "convertMemberToOutsideCollaborator",
    "description": "<p>When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see &quot;<a href=\"https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/\">Converting an organization member to an outside collaborator</a>&quot;. <a href=\"https://developer.github.com/v3/orgs/outside_collaborators/#convert-member-to-outside-collaborator\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.convertMemberToOutsideCollaborator({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.convertMemberToOutsideCollaborator({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.convertMemberToOutsideCollaborator({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/hooks",
    "title": "createHook",
    "name": "createHook",
    "description": "<p>Here's how you can create a hook that posts payloads in JSON format: <a href=\"https://developer.github.com/v3/orgs/hooks/#create-a-hook\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Must be passed as &quot;web&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "config",
            "description": "<p>Key/value pairs to provide settings for this webhook. <a href=\"#create-hook-config-params\">These are defined below</a>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "config:url",
            "description": "<p>The URL to which the payloads will be delivered.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:content_type",
            "description": "<p>The media type used to serialize the payloads. Supported values include <code>json</code> and <code>form</code>. The default is <code>form</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:secret",
            "description": "<p>If provided, the <code>secret</code> will be used as the <code>key</code> to generate the HMAC hex digest value in the <a href=\"https://developer.github.com/webhooks/#delivery-headers\"><code>X-Hub-Signature</code></a> header.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:insecure_ssl",
            "description": "<p>Determines whether the SSL certificate of the host for <code>url</code> will be verified when delivering payloads. Supported values include <code>0</code> (verification is performed) and <code>1</code> (verification is not performed). The default is <code>0</code>. <strong>We strongly recommend not setting this to <code>1</code> as you are subject to man-in-the-middle and other attacks.</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "events",
            "defaultValue": "[",
            "description": "<p>push&quot;]&quot;]  Determines what <a href=\"https://developer.github.com/v3/activity/events/types/\">events</a> the hook is triggered for.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>Determines if notifications are sent when the webhook is triggered. Set to <code>true</code> to send notifications.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.createHook({org, name, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.createHook({org, name, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.createHook({org, name, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/teams",
    "title": "createTeam",
    "name": "createTeam",
    "description": "<p>To create a team, the authenticated user must be a member of <code>:org</code>. <a href=\"https://developer.github.com/v3/teams/#create-team\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "maintainers",
            "description": "<p>The logins of organization members to add as maintainers of the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "repo_names",
            "description": "<p>The full name (e.g., &quot;organization-name/repository-name&quot;) of repositories to add the team to.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "secret",
              "closed"
            ],
            "optional": true,
            "field": "privacy",
            "defaultValue": "secret",
            "description": "<p>The level of privacy this team should have. The options are:<br> <em>For a non-nested team:</em>*<br> * <code>secret</code> - only visible to organization owners and members of this team.<br> * <code>closed</code> - visible to all members of this organization.<br> Default: <code>secret</code><br> <em>For a parent or child team:</em>*<br> * <code>closed</code> - visible to all members of this organization.<br> Default for child team: <code>closed</code><br> <em>Note</em>*: You must pass the <code>hellcat-preview</code> media type to set privacy default to <code>closed</code> for child teams. <strong>For a parent or child team:</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "pull",
              "push",
              "admin"
            ],
            "optional": true,
            "field": "permission",
            "defaultValue": "pull",
            "description": "<p><strong>Deprecated</strong>. The permission that new repositories will be added to the team with when none is specified. Can be one of:<br> * <code>pull</code> - team members can pull, but not push to or administer newly-added repositories.<br> * <code>push</code> - team members can pull and push, but not administer newly-added repositories.<br> * <code>admin</code> - team members can pull, push and administer newly-added repositories.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "parent_team_id",
            "description": "<p>The ID of a team to set as the parent team. <strong>Note</strong>: You must pass the <code>hellcat-preview</code> media type to use this parameter.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.createTeam({org, name, description, maintainers, repo_names, privacy, permission, parent_team_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.createTeam({org, name, description, maintainers, repo_names, privacy, permission, parent_team_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.createTeam({org, name, description, maintainers, repo_names, privacy, permission, parent_team_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/hooks/:id",
    "title": "deleteHook",
    "name": "deleteHook",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/hooks/#delete-a-hook\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.deleteHook({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.deleteHook({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.deleteHook({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/teams/:id",
    "title": "deleteTeam",
    "name": "deleteTeam",
    "description": "<p>To delete a team, the authenticated user must be a team maintainer or an owner of the org associated with the team.</p> <p>If you are an organization owner and you pass the <code>hellcat-preview</code> media type, deleting a parent team will delete all of its child teams as well. <a href=\"https://developer.github.com/v3/teams/#delete-team\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.deleteTeam({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.deleteTeam({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.deleteTeam({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/teams/:id/repos/:owner/:repo",
    "title": "deleteTeamRepo",
    "name": "deleteTeamRepo",
    "description": "<p>If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team. <a href=\"https://developer.github.com/v3/teams/#remove-team-repository\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.deleteTeamRepo({id, owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.deleteTeamRepo({id, owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.deleteTeamRepo({id, owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PATCH",
    "url": "/orgs/:org/hooks/:id",
    "title": "editHook",
    "name": "editHook",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/hooks/#edit-a-hook\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "config",
            "description": "<p>Key/value pairs to provide settings for this webhook. <a href=\"#update-hook-config-params\">These are defined below</a>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "config:url",
            "description": "<p>The URL to which the payloads will be delivered.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:content_type",
            "description": "<p>The media type used to serialize the payloads. Supported values include <code>json</code> and <code>form</code>. The default is <code>form</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:secret",
            "description": "<p>If provided, the <code>secret</code> will be used as the <code>key</code> to generate the HMAC hex digest value in the <a href=\"https://developer.github.com/webhooks/#delivery-headers\"><code>X-Hub-Signature</code></a> header.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:insecure_ssl",
            "description": "<p>Determines whether the SSL certificate of the host for <code>url</code> will be verified when delivering payloads. Supported values include <code>0</code> (verification is performed) and <code>1</code> (verification is not performed). The default is <code>0</code>. <strong>We strongly recommend not setting this to <code>1</code> as you are subject to man-in-the-middle and other attacks.</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "events",
            "defaultValue": "[",
            "description": "<p>push&quot;]&quot;]  Determines what <a href=\"https://developer.github.com/v3/activity/events/types/\">events</a> the hook is triggered for.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>Determines if notifications are sent when the webhook is triggered. Set to <code>true</code> to send notifications.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.editHook({org, id, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.editHook({org, id, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.editHook({org, id, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PATCH",
    "url": "/teams/:id",
    "title": "editTeam",
    "name": "editTeam",
    "description": "<p>To edit a team, the authenticated user must either be an owner of the org that the team is associated with, or a maintainer of the team. <em>Note:</em>* With nested teams, the <code>privacy</code> for parent teams cannot be <code>secret</code>. <a href=\"https://developer.github.com/v3/teams/#edit-team\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "privacy",
            "description": "<p>The level of privacy this team should have. Editing teams without specifying this parameter leaves <code>privacy</code> intact. The options are:<br> <em>For a non-nested team:</em>*<br> * <code>secret</code> - only visible to organization owners and members of this team.<br> * <code>closed</code> - visible to all members of this organization.<br> <em>For a parent or child team:</em>*<br> * <code>closed</code> - visible to all members of this organization.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "pull",
              "push",
              "admin"
            ],
            "optional": true,
            "field": "permission",
            "defaultValue": "pull",
            "description": "<p><strong>Deprecated</strong>. The permission that new repositories will be added to the team with when none is specified. Can be one of:<br> * <code>pull</code> - team members can pull, but not push to or administer newly-added repositories.<br> * <code>push</code> - team members can pull and push, but not administer newly-added repositories.<br> * <code>admin</code> - team members can pull, push and administer newly-added repositories.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "parent_team_id",
            "description": "<p>The ID of a team to set as the parent team. <strong>Note</strong>: You must pass the <code>hellcat-preview</code> media type to use this parameter.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.editTeam({id, name, description, privacy, permission, parent_team_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.editTeam({id, name, description, privacy, permission, parent_team_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.editTeam({id, name, description, privacy, permission, parent_team_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org",
    "title": "get",
    "name": "get",
    "description": "<p>To see many of the organization response values, you need to be an authenticated organization owner with the <code>admin:org</code> scope. When the value of <code>two_factor_requirement_enabled</code> is <code>true</code>, the organization requires all members, billing managers, and outside collaborators to enable <a href=\"https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/\">two-factor authentication</a>. <a href=\"https://developer.github.com/v3/orgs/#get-an-organization\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.get({org})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.get({org}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.get({org}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/organizations",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>Lists all organizations, in the order that they were created on GitHub. <em>Note:</em>* Pagination is powered exclusively by the <code>since</code> parameter. Use the <a href=\"https://developer.github.com/v3/#link-header\">Link header</a> to get the URL for the next page of organizations. <a href=\"https://developer.github.com/v3/orgs/#list-all-organizations\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>The integer ID of the last Organization that you've seen.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getAll({since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getAll({since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getAll({since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/blocks",
    "title": "getBlockedUsers",
    "name": "getBlockedUsers",
    "description": "<p>List the users blocked by an organization. <a href=\"https://developer.github.com/v3/orgs/blocking/#list-blocked-users\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getBlockedUsers({org})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getBlockedUsers({org}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getBlockedUsers({org}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/teams",
    "title": "getChildTeams",
    "name": "getChildTeams",
    "description": "<p>At this time, the <code>hellcat-preview</code> media type is required to use this endpoint.</p> <p><a href=\"https://developer.github.com/v3/teams/#list-child-teams\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getChildTeams({id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getChildTeams({id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getChildTeams({id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/users/:username/orgs",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>List <a href=\"https://help.github.com/articles/publicizing-or-concealing-organization-membership\">public organization memberships</a> for the specified user.</p> <p>This method only lists <em>public</em> memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the <a href=\"#list-your-organizations\">List your organizations</a> API instead. <a href=\"https://developer.github.com/v3/orgs/#list-user-organizations\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getForUser({username, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getForUser({username, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getForUser({username, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/hooks/:id",
    "title": "getHook",
    "name": "getHook",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/hooks/#get-single-hook\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getHook({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getHook({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getHook({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/hooks",
    "title": "getHooks",
    "name": "getHooks",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/hooks/#list-hooks\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getHooks({org, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getHooks({org, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getHooks({org, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/members",
    "title": "getMembers",
    "name": "getMembers",
    "description": "<p>List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.</p> <p><a href=\"https://developer.github.com/v3/orgs/members/#members-list\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "2fa_disabled",
              "all"
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "all",
            "description": "<p>Filter members returned in the list. Can be one of:<br> * <code>2fa_disabled</code> - Members without <a href=\"https://github.com/blog/1614-two-factor-authentication\">two-factor authentication</a> enabled. Available for organization owners.<br> * <code>all</code> - All members the authenticated user can see.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "admin",
              "member"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "all",
            "description": "<p>Filter members returned by their role. Can be one of:<br> * <code>all</code> - All members of the organization, regardless of role.<br> * <code>admin</code> - Organization owners.<br> * <code>member</code> - Non-owner organization members.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getMembers({org, filter, role, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getMembers({org, filter, role, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getMembers({org, filter, role, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/memberships/:username",
    "title": "getOrgMembership",
    "name": "getOrgMembership",
    "description": "<p>In order to get a user's membership with an organization, the authenticated user must be an organization member. <a href=\"https://developer.github.com/v3/orgs/members/#get-organization-membership\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getOrgMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getOrgMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getOrgMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/outside_collaborators",
    "title": "getOutsideCollaborators",
    "name": "getOutsideCollaborators",
    "description": "<p>List all users who are outside collaborators of an organization.</p> <p><a href=\"https://developer.github.com/v3/orgs/outside_collaborators/#list-outside-collaborators\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "2fa_disabled",
              "all"
            ],
            "optional": true,
            "field": "filter",
            "defaultValue": "all",
            "description": "<p>Filter the list of outside collaborators. Can be one of:<br> * <code>2fa_disabled</code>: Outside collaborators without <a href=\"https://github.com/blog/1614-two-factor-authentication\">two-factor authentication</a> enabled.<br> * <code>all</code>: All outside collaborators.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getOutsideCollaborators({org, filter, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getOutsideCollaborators({org, filter, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getOutsideCollaborators({org, filter, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/invitations",
    "title": "getPendingOrgInvites",
    "name": "getPendingOrgInvites",
    "description": "<p>The return hash contains a <code>role</code> field which refers to the Organization Invitation role and will be one of the following values: <code>direct_member</code>, <code>admin</code>, <code>billing_manager</code>, <code>hiring_manager</code>, or <code>reinstate</code>. If the invitee is not a GitHub member, the <code>login</code> field in the return hash will be <code>null</code>. <a href=\"https://developer.github.com/v3/orgs/members/#list-pending-organization-invitations\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getPendingOrgInvites({org, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getPendingOrgInvites({org, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getPendingOrgInvites({org, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/invitations",
    "title": "getPendingTeamInvites",
    "name": "getPendingTeamInvites",
    "description": "<p>The return hash contains a <code>role</code> field which refers to the Organization Invitation role and will be one of the following values: <code>direct_member</code>, <code>admin</code>, <code>billing_manager</code>, <code>hiring_manager</code>, or <code>reinstate</code>. If the invitee is not a GitHub member, the <code>login</code> field in the return hash will be <code>null</code>. <a href=\"https://developer.github.com/v3/teams/members/#list-pending-team-invitations\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getPendingTeamInvites({id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getPendingTeamInvites({id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getPendingTeamInvites({id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/public_members",
    "title": "getPublicMembers",
    "name": "getPublicMembers",
    "description": "<p>Members of an organization can choose to have their membership publicized or not. <a href=\"https://developer.github.com/v3/orgs/members/#public-members-list\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getPublicMembers({org, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getPublicMembers({org, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getPublicMembers({org, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id",
    "title": "getTeam",
    "name": "getTeam",
    "description": "<p><a href=\"https://developer.github.com/v3/teams/#get-team\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getTeam({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getTeam({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getTeam({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/members",
    "title": "getTeamMembers",
    "name": "getTeamMembers",
    "description": "<p>If you pass the <code>hellcat-preview</code> media type, team members will include the members of child teams. <a href=\"https://developer.github.com/v3/teams/members/#list-team-members\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "member",
              "maintainer",
              "all"
            ],
            "optional": true,
            "field": "role",
            "defaultValue": "all",
            "description": "<p>Filters members returned by their role in the team. Can be one of:<br> * <code>member</code> - normal members of the team.<br> * <code>maintainer</code> - team maintainers.<br> * <code>all</code> - all members of the team.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getTeamMembers({id, role, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getTeamMembers({id, role, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getTeamMembers({id, role, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/memberships/:username",
    "title": "getTeamMembership",
    "name": "getTeamMembership",
    "description": "<p>If you pass the <code>hellcat-preview</code> media type, team members will include the members of child teams.</p> <p>To get a user's membership with a team, the team must be visible to the authenticated user. <em>Note:</em>* The <code>role</code> for organization owners returns as <code>maintainer</code>. For more information about <code>maintainer</code> roles, see <a href=\"https://developer.github.com/v3/teams#create-team\">Create team</a>. <a href=\"https://developer.github.com/v3/teams/members/#get-team-membership\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getTeamMembership({id, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getTeamMembership({id, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getTeamMembership({id, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/teams/:id/repos",
    "title": "getTeamRepos",
    "name": "getTeamRepos",
    "description": "<p><strong>Note</strong>: If you pass the <code>hellcat-preview</code> media type, the response will include any repositories inherited through a parent team. <a href=\"https://developer.github.com/v3/teams/#list-team-repos\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getTeamRepos({id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getTeamRepos({id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getTeamRepos({id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/teams",
    "title": "getTeams",
    "name": "getTeams",
    "description": "<p><a href=\"https://developer.github.com/v3/teams/#list-teams\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.getTeams({org, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.getTeams({org, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.getTeams({org, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/hooks/:id/pings",
    "title": "pingHook",
    "name": "pingHook",
    "description": "<p>This will trigger a <a href=\"https://developer.github.com/webhooks/#ping-event\">ping event</a> to be sent to the hook. <a href=\"https://developer.github.com/v3/orgs/hooks/#ping-a-hook\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.pingHook({org, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.pingHook({org, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.pingHook({org, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PUT",
    "url": "/orgs/:org/public_members/:username",
    "title": "publicizeMembership",
    "name": "publicizeMembership",
    "description": "<p>The user can publicize their own membership. (A user cannot publicize the membership for another user.)</p> <p>Note that you'll need to set <code>Content-Length</code> to zero when calling out to this endpoint. For more information, see &quot;<a href=\"https://developer.github.com/v3/#http-verbs\">HTTP verbs</a>.&quot; <a href=\"https://developer.github.com/v3/orgs/members/#publicize-a-users-membership\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.publicizeMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.publicizeMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.publicizeMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/members/:username",
    "title": "removeMember",
    "name": "removeMember",
    "description": "<p>Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories. <a href=\"https://developer.github.com/v3/orgs/members/#remove-a-member\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.removeMember({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.removeMember({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.removeMember({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/memberships/:username",
    "title": "removeOrgMembership",
    "name": "removeOrgMembership",
    "description": "<p>In order to remove a user's membership with an organization, the authenticated user must be an organization owner.</p> <p>If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases. <a href=\"https://developer.github.com/v3/orgs/members/#remove-organization-membership\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.removeOrgMembership({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.removeOrgMembership({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.removeOrgMembership({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/outside_collaborators/:username",
    "title": "removeOutsideCollaborator",
    "name": "removeOutsideCollaborator",
    "description": "<p>Removing a user from this list will remove them from all the organization's repositories. <a href=\"https://developer.github.com/v3/orgs/outside_collaborators/#remove-outside-collaborator\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.removeOutsideCollaborator({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.removeOutsideCollaborator({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.removeOutsideCollaborator({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/teams/:id/memberships/:username",
    "title": "removeTeamMembership",
    "name": "removeTeamMembership",
    "description": "<p>To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team. <a href=\"https://developer.github.com/v3/teams/members/#remove-team-membership\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.removeTeamMembership({id, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.removeTeamMembership({id, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.removeTeamMembership({id, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "DELETE",
    "url": "/orgs/:org/blocks/:username",
    "title": "unblockUser",
    "name": "unblockUser",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/blocking/#unblock-a-user\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.unblockUser({org, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.unblockUser({org, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.unblockUser({org, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "PATCH",
    "url": "/orgs/:org",
    "title": "update",
    "name": "update",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/#edit-an-organization\">REST API doc</a></p>",
    "group": "Orgs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "billing_email",
            "description": "<p>Billing email address. This address is not publicized.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "company",
            "description": "<p>The company name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>The publicly visible email address.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "location",
            "description": "<p>The location.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The shorthand name of the company.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the company.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_organization_projects",
            "description": "<p>Toggles whether organization projects are enabled for the organization.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_repository_projects",
            "description": "<p>Toggles whether repository projects are enabled for repositories that belong to the organization.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "read",
              "write",
              "admin",
              "none"
            ],
            "optional": true,
            "field": "default_repository_permission",
            "defaultValue": "read",
            "description": "<p>Default permission level members have for organization repositories:<br> * <code>read</code> - can pull, but not push to or administer this repository.<br> * <code>write</code> - can pull and push, but not administer this repository.<br> * <code>admin</code> - can pull, push, and administer this repository.<br> * <code>none</code> - no permissions granted by default.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "members_can_create_repositories",
            "defaultValue": "true",
            "description": "<p>Toggles ability of non-admin organization members to create repositories<br> * <code>true</code> - all organization members can create repositories.<br> * <code>false</code> - only admin members can create repositories.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.orgs.update({org, billing_email, company, email, location, name, description, has_organization_projects, has_repository_projects, default_repository_permission, members_can_create_repositories})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.orgs.update({org, billing_email, company, email, location, name, description, has_organization_projects, has_repository_projects, default_repository_permission, members_can_create_repositories}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.orgs.update({org, billing_email, company, email, location, name, description, has_organization_projects, has_repository_projects, default_repository_permission, members_can_create_repositories}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Orgs"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/projects",
    "title": "createOrgProject",
    "name": "createOrgProject",
    "description": "<p><strong>Note</strong>: The status code may also be <code>401</code> or <code>410</code>, depending on the scope of the authenticating token. <a href=\"https://developer.github.com/v3/projects/#create-an-organization-project\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The body of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.createOrgProject({org, name, body, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.createOrgProject({org, name, body, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.createOrgProject({org, name, body, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/projects/columns/:column_id/cards",
    "title": "createProjectCard",
    "name": "createProjectCard",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/cards/#create-a-project-card\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "column_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>The card's note content. Only valid for cards without another type of content, so this must be omitted if <code>content_id</code> and <code>content_type</code> are specified.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "content_id",
            "description": "<p>The id of the issue to associate with this card.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "content_type",
            "description": "<p><strong>Required if you specify a content_id</strong>. The type of content to associate with this card. Can only be &quot;Issue&quot; at this time.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.createProjectCard({column_id, note, content_id, content_type})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.createProjectCard({column_id, note, content_id, content_type}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.createProjectCard({column_id, note, content_id, content_type}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/projects/:project_id/columns",
    "title": "createProjectColumn",
    "name": "createProjectColumn",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/columns/#create-a-project-column\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "project_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the column.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.createProjectColumn({project_id, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.createProjectColumn({project_id, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.createProjectColumn({project_id, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/projects",
    "title": "createRepoProject",
    "name": "createRepoProject",
    "description": "<p><strong>Note</strong>: The status code may also be <code>401</code> or <code>410</code>, depending on the scope of the authenticating token. <a href=\"https://developer.github.com/v3/projects/#create-a-repository-project\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The body of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.createRepoProject({owner, repo, name, body, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.createRepoProject({owner, repo, name, body, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.createRepoProject({owner, repo, name, body, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "DELETE",
    "url": "/projects/:project_id",
    "title": "deleteProject",
    "name": "deleteProject",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/#delete-a-project\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "project_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.deleteProject({project_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.deleteProject({project_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.deleteProject({project_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "DELETE",
    "url": "/projects/columns/cards/:card_id",
    "title": "deleteProjectCard",
    "name": "deleteProjectCard",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/cards/#delete-a-project-card\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "card_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.deleteProjectCard({card_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.deleteProjectCard({card_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.deleteProjectCard({card_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "DELETE",
    "url": "/projects/columns/:column_id",
    "title": "deleteProjectColumn",
    "name": "deleteProjectColumn",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/columns/#delete-a-project-column\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "column_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.deleteProjectColumn({column_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.deleteProjectColumn({column_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.deleteProjectColumn({column_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/projects",
    "title": "getOrgProjects",
    "name": "getOrgProjects",
    "description": "<p><strong>Note</strong>: The status code may also be <code>401</code> or <code>410</code>, depending on the scope of the authenticating token. <a href=\"https://developer.github.com/v3/projects/#list-organization-projects\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>Indicates the state of the projects to return. Can be either <code>open</code>, <code>closed</code>, or <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getOrgProjects({org, state, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getOrgProjects({org, state, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getOrgProjects({org, state, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects/:project_id",
    "title": "getProject",
    "name": "getProject",
    "description": "<p><strong>Note</strong>: The status code may also be <code>401</code> or <code>410</code>, depending on the scope of the authenticating token. <a href=\"https://developer.github.com/v3/projects/#get-a-project\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "project_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getProject({project_id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getProject({project_id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getProject({project_id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects/columns/cards/:card_id",
    "title": "getProjectCard",
    "name": "getProjectCard",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/cards/#get-a-project-card\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "card_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getProjectCard({card_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getProjectCard({card_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getProjectCard({card_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects/columns/:column_id/cards",
    "title": "getProjectCards",
    "name": "getProjectCards",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/cards/#list-project-cards\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "column_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getProjectCards({column_id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getProjectCards({column_id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getProjectCards({column_id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects/columns/:column_id",
    "title": "getProjectColumn",
    "name": "getProjectColumn",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/columns/#get-a-project-column\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "column_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getProjectColumn({column_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getProjectColumn({column_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getProjectColumn({column_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/projects/:project_id/columns",
    "title": "getProjectColumns",
    "name": "getProjectColumns",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/columns/#list-project-columns\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "project_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getProjectColumns({project_id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getProjectColumns({project_id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getProjectColumns({project_id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/projects",
    "title": "getRepoProjects",
    "name": "getRepoProjects",
    "description": "<p><strong>Note</strong>: The status code may also be <code>401</code> or <code>410</code>, depending on the scope of the authenticating token. <a href=\"https://developer.github.com/v3/projects/#list-repository-projects\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>Indicates the state of the projects to return. Can be either <code>open</code>, <code>closed</code>, or <code>all</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.getRepoProjects({owner, repo, state, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.getRepoProjects({owner, repo, state, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.getRepoProjects({owner, repo, state, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/projects/columns/cards/:card_id/moves",
    "title": "moveProjectCard",
    "name": "moveProjectCard",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/cards/#move-a-project-card\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "card_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "top",
              "bottom",
              "after:<card_id>"
            ],
            "optional": false,
            "field": "position",
            "description": "<p>Can be one of <code>top</code>, <code>bottom</code>, or <code>after:&lt;card_id&gt;</code>, where <code>&lt;card_id&gt;</code> is the <code>id</code> value of a card in the same column, or in the new column specified by <code>column_id</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "column_id",
            "description": "<p>The <code>id</code> value of a column in the same project.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.moveProjectCard({card_id, position, column_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.moveProjectCard({card_id, position, column_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.moveProjectCard({card_id, position, column_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "POST",
    "url": "/projects/columns/:column_id/moves",
    "title": "moveProjectColumn",
    "name": "moveProjectColumn",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/columns/#move-a-project-column\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "column_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "first",
              "last",
              "after:<column_id>"
            ],
            "optional": false,
            "field": "position",
            "description": "<p>Can be one of <code>first</code>, <code>last</code>, or <code>after:&lt;column_id&gt;</code>, where <code>&lt;column_id&gt;</code> is the <code>id</code> value of a column in the same project.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.moveProjectColumn({column_id, position})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.moveProjectColumn({column_id, position}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.moveProjectColumn({column_id, position}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "PATCH",
    "url": "/projects/:project_id",
    "title": "updateProject",
    "name": "updateProject",
    "description": "<p><strong>Note</strong>: The status code may also be <code>401</code> or <code>410</code>, depending on the scope of the authenticating token. <a href=\"https://developer.github.com/v3/projects/#update-a-project\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "project_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The name of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The body of the project.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed"
            ],
            "optional": true,
            "field": "state",
            "description": "<p>State of the project. Either <code>open</code> or <code>closed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "organization_permission",
            "description": "<p>The permission level that all members of the project's organization will have on this project. If an organization member belongs to a team with a higher level of access or is a collaborator with a higher level of access, their permission level is not lowered by <code>organization_permission</code>. Updating a project's organization permission requires <code>admin</code> access to the project. Setting the organization permission is only available for organization projects.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "public",
            "description": "<p>Sets visibility of the project within the organization. Updating a project's visibility requires <code>admin</code> access to the project. Setting visibility is only available for organization projects. Can be one of:<br> * <code>true</code> - Anyone that can view the organization can see the project.<br> * <code>false</code> - The project must be an organization project to set project visibility.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.updateProject({project_id, name, body, state, organization_permission, public, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.updateProject({project_id, name, body, state, organization_permission, public, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.updateProject({project_id, name, body, state, organization_permission, public, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "PATCH",
    "url": "/projects/columns/cards/:card_id",
    "title": "updateProjectCard",
    "name": "updateProjectCard",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/cards/#update-a-project-card\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "card_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "note",
            "description": "<p>The card's note content. Only valid for cards without another type of content, so this cannot be specified if the card already has a <code>content_id</code> and <code>content_type</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.updateProjectCard({card_id, note})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.updateProjectCard({card_id, note}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.updateProjectCard({card_id, note}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "PATCH",
    "url": "/projects/columns/:column_id",
    "title": "updateProjectColumn",
    "name": "updateProjectColumn",
    "description": "<p><a href=\"https://developer.github.com/v3/projects/columns/#update-a-project-column\">REST API doc</a></p>",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "column_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The new name of the column.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.projects.updateProjectColumn({column_id, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.projects.updateProjectColumn({column_id, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.projects.updateProjectColumn({column_id, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Projects"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/merge",
    "title": "checkMerged",
    "name": "checkMerged",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/#get-if-a-pull-request-has-been-merged\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.checkMerged({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.checkMerged({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.checkMerged({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls",
    "title": "create",
    "name": "create",
    "description": "<p><strong>Note:</strong> To open a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open a pull request. <a href=\"https://developer.github.com/v3/pulls/#create-a-pull-request\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the pull request.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "head",
            "description": "<p>The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace <code>head</code> with a user like this: <code>username:branch</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "base",
            "description": "<p>The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The contents of the pull request.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "maintainer_can_modify",
            "description": "<p>Indicates whether <a href=\"https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/\">maintainers can modify</a> the pull request.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.create({owner, repo, title, head, base, body, maintainer_can_modify})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.create({owner, repo, title, head, base, body, maintainer_can_modify}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.create({owner, repo, title, head, base, body, maintainer_can_modify}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/comments",
    "title": "createComment",
    "name": "createComment",
    "description": "<p><strong>Note:</strong> To comment on a specific line in a file, you need to first determine the <em>position</em> of that line in the diff. The GitHub REST API v3 offers the <code>application/vnd.github.v3.diff</code> <a href=\"https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests\">media type</a>. To see a pull request diff, add this media type to the <code>Accept</code> header of a call to the <a href=\"https://developer.github.com/v3/pulls/#get-a-single-pull-request\">single pull request</a> endpoint.</p> <p>The <code>position</code> value equals the number of lines down from the first &quot;@@&quot; hunk header in the file you want to add a comment. The line just below the &quot;@@&quot; line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file. <a href=\"https://developer.github.com/v3/pulls/comments/#create-a-comment\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>The text of the comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "commit_id",
            "description": "<p>The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the <code>position</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": "<p>The relative path to the file that necessitates a comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "position",
            "description": "<p>The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.createComment({owner, repo, number, body, commit_id, path, position})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.createComment({owner, repo, number, body, commit_id, path, position}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.createComment({owner, repo, number, body, commit_id, path, position}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/comments",
    "title": "createCommentReply",
    "name": "createCommentReply",
    "description": "<p><strong>Note:</strong> To comment on a specific line in a file, you need to first determine the <em>position</em> of that line in the diff. The GitHub REST API v3 offers the <code>application/vnd.github.v3.diff</code> <a href=\"https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests\">media type</a>. To see a pull request diff, add this media type to the <code>Accept</code> header of a call to the <a href=\"https://developer.github.com/v3/pulls/#get-a-single-pull-request\">single pull request</a> endpoint.</p> <p>The <code>position</code> value equals the number of lines down from the first &quot;@@&quot; hunk header in the file you want to add a comment. The line just below the &quot;@@&quot; line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file. <a href=\"https://developer.github.com/v3/pulls/comments/#create-a-comment\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>The text of the comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "in_reply_to",
            "description": "<p>The comment ID to reply to. <strong>Note</strong>: This must be the ID of a <em>top-level comment</em>, not a reply to that comment. Replies to replies are not supported.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.createCommentReply({owner, repo, number, body, in_reply_to})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.createCommentReply({owner, repo, number, body, in_reply_to}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.createCommentReply({owner, repo, number, body, in_reply_to}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls",
    "title": "createFromIssue",
    "name": "createFromIssue",
    "description": "<p><strong>Note:</strong> To open a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open a pull request. <a href=\"https://developer.github.com/v3/pulls/#create-a-pull-request\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the pull request.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "head",
            "description": "<p>The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace <code>head</code> with a user like this: <code>username:branch</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "base",
            "description": "<p>The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The contents of the pull request.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "maintainer_can_modify",
            "description": "<p>Indicates whether <a href=\"https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/\">maintainers can modify</a> the pull request.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.createFromIssue({owner, repo, title, head, base, body, maintainer_can_modify})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.createFromIssue({owner, repo, title, head, base, body, maintainer_can_modify}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.createFromIssue({owner, repo, title, head, base, body, maintainer_can_modify}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/reviews",
    "title": "createReview",
    "name": "createReview",
    "description": "<p><strong>Note:</strong> To comment on a specific line in a file, you need to first determine the <em>position</em> of that line in the diff. The GitHub REST API v3 offers the <code>application/vnd.github.v3.diff</code> <a href=\"https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests\">media type</a>. To see a pull request diff, add this media type to the <code>Accept</code> header of a call to the <a href=\"https://developer.github.com/v3/pulls/#get-a-single-pull-request\">single pull request</a> endpoint.</p> <p>The <code>position</code> value equals the number of lines down from the first &quot;@@&quot; hunk header in the file you want to add a comment. The line just below the &quot;@@&quot; line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file. <a href=\"https://developer.github.com/v3/pulls/reviews/#create-a-pull-request-review\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "commit_id",
            "description": "<p>The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the <code>position</code>. Defaults to the most recent commit in the pull request when you do not specify a value.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p><strong>Required</strong> when using <code>REQUEST_CHANGES</code> or <code>COMMENT</code> for the <code>event</code> parameter. The body text of the pull request review.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "APPROVE",
              "REQUEST_CHANGES",
              "COMMENT"
            ],
            "optional": true,
            "field": "event",
            "description": "<p>The review action you want to perform. The review actions include: <code>APPROVE</code>, <code>REQUEST_CHANGES</code>, or <code>COMMENT</code>. By leaving this blank, you set the review action state to <code>PENDING</code>, which means you will need to <a href=\"https://developer.github.com/v3/pulls/reviews/#submit-a-pull-request-review\">submit the pull request review</a> when you are ready.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": true,
            "field": "comments",
            "description": "<p>Use the following table to specify the location, destination, and contents of the draft review comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "comments:path",
            "description": "<p><strong>Required.</strong> The relative path to the file that necessitates a review comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "comments:position",
            "description": "<p><strong>Required.</strong> The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "comments:body",
            "description": "<p><strong>Required.</strong> Text of the review comment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.createReview({owner, repo, number, commit_id, body, event, comments, comments[].path, comments[].position, comments[].body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.createReview({owner, repo, number, commit_id, body, event, comments, comments[].path, comments[].position, comments[].body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.createReview({owner, repo, number, commit_id, body, event, comments, comments[].path, comments[].position, comments[].body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/requested_reviewers",
    "title": "createReviewRequest",
    "name": "createReviewRequest",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/review_requests/#create-a-review-request\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "reviewers",
            "description": "<p>An array of user <code>login</code>s that will be requested.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "team_reviewers",
            "description": "<p>An array of team <code>slug</code>s that will be requested.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.createReviewRequest({owner, repo, number, reviewers, team_reviewers})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.createReviewRequest({owner, repo, number, reviewers, team_reviewers}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.createReviewRequest({owner, repo, number, reviewers, team_reviewers}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/pulls/comments/:id",
    "title": "deleteComment",
    "name": "deleteComment",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/comments/#delete-a-comment\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.deleteComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.deleteComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.deleteComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id",
    "title": "deletePendingReview",
    "name": "deletePendingReview",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/reviews/#delete-a-pending-review\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.deletePendingReview({owner, repo, number, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.deletePendingReview({owner, repo, number, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.deletePendingReview({owner, repo, number, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/pulls/:number/requested_reviewers",
    "title": "deleteReviewRequest",
    "name": "deleteReviewRequest",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/review_requests/#delete-a-review-request\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "reviewers",
            "description": "<p>An array of user <code>login</code>s that will be removed.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "team_reviewers",
            "description": "<p>An array of team <code>slug</code>s that will be removed.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.deleteReviewRequest({owner, repo, number, reviewers, team_reviewers}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals",
    "title": "dismissReview",
    "name": "dismissReview",
    "description": "<p><strong>Note:</strong> To dismiss a pull request review on a <a href=\"https://developer.github.com/v3/repos/branches/\">protected branch</a>, you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews. <a href=\"https://developer.github.com/v3/pulls/reviews/#dismiss-a-pull-request-review\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "message",
            "description": "<p><strong>Required.</strong> The message for the pull request review dismissal</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.dismissReview({owner, repo, number, id, message})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.dismissReview({owner, repo, number, id, message}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.dismissReview({owner, repo, number, id, message}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/pulls/comments/:id",
    "title": "editComment",
    "name": "editComment",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/comments/#edit-a-comment\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>The text of the comment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.editComment({owner, repo, id, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.editComment({owner, repo, id, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.editComment({owner, repo, id, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number",
    "title": "get",
    "name": "get",
    "description": "<p>Lists details of a pull request by providing its number.</p> <p>When you get, <a href=\"https://developer.github.com/v3/pulls/#create-a-pull-request\">create</a>, or <a href=\"https://developer.github.com/v3/pulls/#update-a-pull-request\">edit</a> a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the <code>mergeable</code> key. For more information, see &quot;<a href=\"https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests\">Checking mergeability of pull requests</a>&quot;.</p> <p>The value of the <code>mergeable</code> attribute can be <code>true</code>, <code>false</code>, or <code>null</code>. If the value is <code>null</code>, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-<code>null</code> value for the <code>mergeable</code> attribute in the response. If <code>mergable</code> is <code>true</code>, then <code>merge_commit_sha</code> will be the SHA of the <em>test</em> merge commit.</p> <p>The value of the <code>merge_commit_sha</code> attribute changes depending on the state of the pull request. Before merging a pull request, the <code>merge_commit_sha</code> attribute holds the SHA of the <em>test</em> merge commit. After merging a pull request, the <code>merge_commit_sha</code> attribute changes depending on how you merged the pull request: If merged as a <a href=\"https://help.github.com/articles/about-merge-methods-on-github/\">merge commit</a>, <code>merge_commit_sha</code> represents the SHA of the merge commit. If merged via a <a href=\"https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits\">squash</a>, <code>merge_commit_sha</code> represents the SHA of the squashed commit on the base branch. If <a href=\"https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits\">rebased</a>, <code>merge_commit_sha</code> represents the commit that the base branch was updated to.</p> <p>Pass the appropriate <a href=\"https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests\">media type</a> to fetch diff and patch formats. <a href=\"https://developer.github.com/v3/pulls/#get-a-single-pull-request\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.get({owner, repo, number})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.get({owner, repo, number}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.get({owner, repo, number}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls",
    "title": "getAll",
    "name": "getAll",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/#list-pull-requests\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed",
              "all"
            ],
            "optional": true,
            "field": "state",
            "defaultValue": "open",
            "description": "<p>Either <code>open</code>, <code>closed</code>, or <code>all</code> to filter by state.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "head",
            "description": "<p>Filter pulls by head user and branch name in the format of <code>user:ref-name</code>. Example: <code>github:new-script-format</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "base",
            "description": "<p>Filter pulls by base branch name. Example: <code>gh-pages</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "popularity",
              "long-running"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>What to sort results by. Can be either <code>created</code>, <code>updated</code>, <code>popularity</code> (comment count) or <code>long-running</code> (age, filtering by pulls updated in the last month).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "`desc` when sort is `created` or sort is not specified, otherwise `asc`",
            "description": "<p>The direction of the sort. Can be either <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getAll({owner, repo, state, head, base, sort, direction, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getAll({owner, repo, state, head, base, sort, direction, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getAll({owner, repo, state, head, base, sort, direction, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/comments/:id",
    "title": "getComment",
    "name": "getComment",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/comments/#get-a-single-comment\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/comments",
    "title": "getComments",
    "name": "getComments",
    "description": "<p>By default, review comments are ordered by ascending ID. <a href=\"https://developer.github.com/v3/pulls/comments/#list-comments-on-a-pull-request\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>Can be either <code>created</code> or <code>updated</code> comments.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "description": "<p>Can be either <code>asc</code> or <code>desc</code>. Ignored without <code>sort</code> parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only returns comments <code>updated</code> at or after this time.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getComments({owner, repo, number, sort, direction, since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getComments({owner, repo, number, sort, direction, since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getComments({owner, repo, number, sort, direction, since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/comments",
    "title": "getCommentsForRepo",
    "name": "getCommentsForRepo",
    "description": "<p>By default, review comments are ordered by ascending ID. <a href=\"https://developer.github.com/v3/pulls/comments/#list-comments-in-a-repository\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "created",
            "description": "<p>Can be either <code>created</code> or <code>updated</code> comments.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "description": "<p>Can be either <code>asc</code> or <code>desc</code>. Ignored without <code>sort</code> parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>. Only returns comments <code>updated</code> at or after this time.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getCommentsForRepo({owner, repo, sort, direction, since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getCommentsForRepo({owner, repo, sort, direction, since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getCommentsForRepo({owner, repo, sort, direction, since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/commits",
    "title": "getCommits",
    "name": "getCommits",
    "description": "<p><strong>Note:</strong> The response includes a maximum of 250 commits. To receive a complete commit list for pull requests with more than 250 commits, use the <a href=\"https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository\">Commit List API</a>. <a href=\"https://developer.github.com/v3/pulls/#list-commits-on-a-pull-request\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getCommits({owner, repo, number, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getCommits({owner, repo, number, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getCommits({owner, repo, number, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/files",
    "title": "getFiles",
    "name": "getFiles",
    "description": "<p><strong>Note:</strong> The response includes a maximum of 300 files. <a href=\"https://developer.github.com/v3/pulls/#list-pull-requests-files\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getFiles({owner, repo, number, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getFiles({owner, repo, number, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getFiles({owner, repo, number, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id",
    "title": "getReview",
    "name": "getReview",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/reviews/#get-a-single-review\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getReview({owner, repo, number, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getReview({owner, repo, number, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getReview({owner, repo, number, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id/comments",
    "title": "getReviewComments",
    "name": "getReviewComments",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/reviews/#get-comments-for-a-single-review\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getReviewComments({owner, repo, number, id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getReviewComments({owner, repo, number, id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getReviewComments({owner, repo, number, id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/requested_reviewers",
    "title": "getReviewRequests",
    "name": "getReviewRequests",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/review_requests/#list-review-requests\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getReviewRequests({owner, repo, number, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getReviewRequests({owner, repo, number, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getReviewRequests({owner, repo, number, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/:number/reviews",
    "title": "getReviews",
    "name": "getReviews",
    "description": "<p>The list of reviews returns in chronological order. <a href=\"https://developer.github.com/v3/pulls/reviews/#list-reviews-on-a-pull-request\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.getReviews({owner, repo, number, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.getReviews({owner, repo, number, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.getReviews({owner, repo, number, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/pulls/:number/merge",
    "title": "merge",
    "name": "merge",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/#merge-a-pull-request-merge-button\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "commit_title",
            "description": "<p>Title for the automatic commit message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "commit_message",
            "description": "<p>Extra detail to append to automatic commit message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sha",
            "description": "<p>SHA that pull request head must match to allow merge.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "merge",
              "squash",
              "rebase"
            ],
            "optional": true,
            "field": "merge_method",
            "description": "<p>Merge method to use. Possible values are <code>merge</code>, <code>squash</code> or <code>rebase</code>. Default is <code>merge</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.merge({owner, repo, number, commit_title, commit_message, sha, merge_method})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.merge({owner, repo, number, commit_title, commit_message, sha, merge_method}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.merge({owner, repo, number, commit_title, commit_message, sha, merge_method}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/:number/reviews/:id/events",
    "title": "submitReview",
    "name": "submitReview",
    "description": "<p><a href=\"https://developer.github.com/v3/pulls/reviews/#submit-a-pull-request-review\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The body text of the pull request review</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "APPROVE",
              "REQUEST_CHANGES",
              "COMMENT"
            ],
            "optional": true,
            "field": "event",
            "description": "<p><strong>Required.</strong> The review action you want to perform. The review actions include: <code>APPROVE</code>, <code>REQUEST_CHANGES</code>, or <code>COMMENT</code>. When you leave this blank, the API returns <em>HTTP 422 (Unrecognizable entity)</em> and sets the review action state to <code>PENDING</code>, which means you will need to re-submit the pull request review using a review action.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.submitReview({owner, repo, number, id, body, event})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.submitReview({owner, repo, number, id, body, event}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.submitReview({owner, repo, number, id, body, event}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/pulls/:number",
    "title": "update",
    "name": "update",
    "description": "<p><strong>Note:</strong> To open a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open a pull request. <a href=\"https://developer.github.com/v3/pulls/#update-a-pull-request\">REST API doc</a></p>",
    "group": "PullRequests",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>The title of the pull request.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>The contents of the pull request.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "open",
              "closed"
            ],
            "optional": true,
            "field": "state",
            "description": "<p>State of this Pull Request. Either <code>open</code> or <code>closed</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "base",
            "description": "<p>The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "maintainer_can_modify",
            "description": "<p>Indicates whether <a href=\"https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/\">maintainers can modify</a> the pull request.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.pullRequests.update({owner, repo, number, title, body, state, base, maintainer_can_modify})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.pullRequests.update({owner, repo, number, title, body, state, base, maintainer_can_modify}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.pullRequests.update({owner, repo, number, title, body, state, base, maintainer_can_modify}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "PullRequests"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/comments/:id/reactions",
    "title": "createForCommitComment",
    "name": "createForCommitComment",
    "description": "<p>Create a reaction to a <a href=\"https://developer.github.com/v3/repos/comments/\">commit comment</a>. A response with a <code>Status: 200 OK</code> means that you already added the reaction type to this commit comment. <a href=\"https://developer.github.com/v3/reactions/#create-reaction-for-a-commit-comment\">REST API doc</a></p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": false,
            "field": "content",
            "description": "<p>The <a href=\"https://developer.github.com/v3/reactions/#reaction-types\">reaction type</a> to add to the commit comment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.createForCommitComment({owner, repo, id, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.createForCommitComment({owner, repo, id, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.createForCommitComment({owner, repo, id, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/:number/reactions",
    "title": "createForIssue",
    "name": "createForIssue",
    "description": "<p>Create a reaction to an <a href=\"https://developer.github.com/v3/issues/\">issue</a>. A response with a <code>Status: 200 OK</code> means that you already added the reaction type to this issue. <a href=\"https://developer.github.com/v3/reactions/#create-reaction-for-an-issue\">REST API doc</a></p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": false,
            "field": "content",
            "description": "<p>The <a href=\"https://developer.github.com/v3/reactions/#reaction-types\">reaction type</a> to add to the issue.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.createForIssue({owner, repo, number, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.createForIssue({owner, repo, number, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.createForIssue({owner, repo, number, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/issues/comments/:id/reactions",
    "title": "createForIssueComment",
    "name": "createForIssueComment",
    "description": "<p>Create a reaction to an <a href=\"https://developer.github.com/v3/issues/comments/\">issue comment</a>. A response with a <code>Status: 200 OK</code> means that you already added the reaction type to this issue comment. <a href=\"https://developer.github.com/v3/reactions/#create-reaction-for-an-issue-comment\">REST API doc</a></p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": false,
            "field": "content",
            "description": "<p>The <a href=\"https://developer.github.com/v3/reactions/#reaction-types\">reaction type</a> to add to the issue comment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.createForIssueComment({owner, repo, id, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.createForIssueComment({owner, repo, id, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.createForIssueComment({owner, repo, id, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pulls/comments/:id/reactions",
    "title": "createForPullRequestReviewComment",
    "name": "createForPullRequestReviewComment",
    "description": "<p>Create a reaction to a <a href=\"https://developer.github.com/v3/pulls/comments/\">pull request review comment</a>. A response with a <code>Status: 200 OK</code> means that you already added the reaction type to this pull request review comment. <a href=\"https://developer.github.com/v3/reactions/#create-reaction-for-a-pull-request-review-comment\">REST API doc</a></p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": false,
            "field": "content",
            "description": "<p>The <a href=\"https://developer.github.com/v3/reactions/#reaction-types\">reaction type</a> to add to the pull request review comment.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.createForPullRequestReviewComment({owner, repo, id, content})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.createForPullRequestReviewComment({owner, repo, id, content}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.createForPullRequestReviewComment({owner, repo, id, content}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "DELETE",
    "url": "/reactions/:id",
    "title": "delete",
    "name": "delete",
    "description": "<p>OAuth access tokens require the <code>write:discussion</code> <a href=\"https://developer.github.com/apps/building-oauth-apps/scopes-for-oauth-apps/\">scope</a>, when deleting a <a href=\"https://developer.github.com/v3/teams/discussions/\">team discussion</a> or <a href=\"https://developer.github.com/v3/teams/discussion_comments/\">team discussion comment</a>. <a href=\"https://developer.github.com/v3/reactions/#delete-a-reaction\">REST API doc</a></p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.delete({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.delete({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.delete({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/comments/:id/reactions",
    "title": "getForCommitComment",
    "name": "getForCommitComment",
    "description": "<p>List the reactions to a <a href=\"https://developer.github.com/v3/repos/comments/\">commit comment</a>. <a href=\"https://developer.github.com/v3/reactions/#list-reactions-for-a-commit-comment\">REST API doc</a></p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": true,
            "field": "content",
            "description": "<p>Returns a single <a href=\"https://developer.github.com/v3/reactions/#reaction-types\">reaction type</a>. Omit this parameter to list all reactions to a commit comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.getForCommitComment({owner, repo, id, content, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.getForCommitComment({owner, repo, id, content, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.getForCommitComment({owner, repo, id, content, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/:number/reactions",
    "title": "getForIssue",
    "name": "getForIssue",
    "description": "<p>List the reactions to an <a href=\"https://developer.github.com/v3/issues/\">issue</a>. <a href=\"https://developer.github.com/v3/reactions/#list-reactions-for-an-issue\">REST API doc</a></p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": true,
            "field": "content",
            "description": "<p>Returns a single <a href=\"https://developer.github.com/v3/reactions/#reaction-types\">reaction type</a>. Omit this parameter to list all reactions to an issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.getForIssue({owner, repo, number, content, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.getForIssue({owner, repo, number, content, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.getForIssue({owner, repo, number, content, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/issues/comments/:id/reactions",
    "title": "getForIssueComment",
    "name": "getForIssueComment",
    "description": "<p>List the reactions to an <a href=\"https://developer.github.com/v3/issues/comments/\">issue comment</a>. <a href=\"https://developer.github.com/v3/reactions/#list-reactions-for-an-issue-comment\">REST API doc</a></p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": true,
            "field": "content",
            "description": "<p>Returns a single <a href=\"https://developer.github.com/v3/reactions/#reaction-types\">reaction type</a>. Omit this parameter to list all reactions to an issue comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.getForIssueComment({owner, repo, id, content, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.getForIssueComment({owner, repo, id, content, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.getForIssueComment({owner, repo, id, content, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pulls/comments/:id/reactions",
    "title": "getForPullRequestReviewComment",
    "name": "getForPullRequestReviewComment",
    "description": "<p>List the reactions to a <a href=\"https://developer.github.com/v3/pulls/comments/\">pull request review comment</a>. <a href=\"https://developer.github.com/v3/reactions/#list-reactions-for-a-pull-request-review-comment\">REST API doc</a></p>",
    "group": "Reactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "+1",
              "-1",
              "laugh",
              "confused",
              "heart",
              "hooray"
            ],
            "optional": true,
            "field": "content",
            "description": "<p>Returns a single <a href=\"https://developer.github.com/v3/reactions/#reaction-types\">reaction type</a>. Omit this parameter to list all reactions to a pull request review comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.reactions.getForPullRequestReviewComment({owner, repo, id, content, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.reactions.getForPullRequestReviewComment({owner, repo, id, content, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.reactions.getForPullRequestReviewComment({owner, repo, id, content, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Reactions"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/collaborators/:username",
    "title": "addCollaborator",
    "name": "addCollaborator",
    "description": "<p>Note that, if you choose not to pass any parameters, you'll need to set <code>Content-Length</code> to zero when calling out to this endpoint. For more information, see &quot;<a href=\"https://developer.github.com/v3/#http-verbs\">HTTP verbs</a>.&quot;</p> <p>The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the <a href=\"https://developer.github.com/v3/repos/invitations/\">repository invitations API endpoints</a>. <em>Rate limits</em>*</p> <p>To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository. <a href=\"https://developer.github.com/v3/repos/collaborators/#add-user-as-a-collaborator\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "pull",
              "push",
              "admin"
            ],
            "optional": true,
            "field": "permission",
            "defaultValue": "push",
            "description": "<p>The permission to grant the collaborator. <strong>Only valid on organization-owned repositories.</strong> Can be one of:<br> * <code>pull</code> - can pull, but not push to or administer this repository.<br> * <code>push</code> - can pull and push, but not administer this repository.<br> * <code>admin</code> - can pull, push and administer this repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addCollaborator({owner, repo, username, permission})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addCollaborator({owner, repo, username, permission}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addCollaborator({owner, repo, username, permission}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/keys",
    "title": "addDeployKey",
    "name": "addDeployKey",
    "description": "<p>Here's how you can create a read-only deploy key:</p> <p><a href=\"https://developer.github.com/v3/repos/keys/#add-a-new-deploy-key\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "title",
            "description": "<p>A name for the key.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>The contents of the key.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "read_only",
            "description": "<p>If <code>true</code>, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addDeployKey({owner, repo, title, key, read_only})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addDeployKey({owner, repo, title, key, read_only}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addDeployKey({owner, repo, title, key, read_only}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    "title": "addProtectedBranchAdminEnforcement",
    "name": "addProtectedBranchAdminEnforcement",
    "description": "<p>Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled. <a href=\"https://developer.github.com/v3/repos/branches/#add-admin-enforcement-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addProtectedBranchAdminEnforcement({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "addProtectedBranchRequiredStatusChecksContexts",
    "name": "addProtectedBranchRequiredStatusChecksContexts",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#add-required-status-checks-contexts-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addProtectedBranchRequiredStatusChecksContexts({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "addProtectedBranchTeamRestrictions",
    "name": "addProtectedBranchTeamRestrictions",
    "description": "<p>Grants the specified teams push access for this branch. If you pass the <code>hellcat-preview</code> media type, you can also give push access to child teams.</p> <table> <thead> <tr> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><code>array</code></td> <td>The teams that can have push access. Use the team's <code>slug</code>. <strong>Note</strong>: The list of users and teams in total is limited to 100 items.</td> </tr> </tbody> </table>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addProtectedBranchTeamRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "addProtectedBranchUserRestrictions",
    "name": "addProtectedBranchUserRestrictions",
    "description": "<p>Grants the specified people push access for this branch.</p> <table> <thead> <tr> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><code>array</code></td> <td>Usernames for people who can have push access. <strong>Note</strong>: The list of users and teams in total is limited to 100 items.</td> </tr> </tbody> </table>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.addProtectedBranchUserRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/collaborators/:username",
    "title": "checkCollaborator",
    "name": "checkCollaborator",
    "description": "<p>For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.</p> <p>If you pass the <code>hellcat-preview</code> media type, team members will include the members of child teams. <a href=\"https://developer.github.com/v3/repos/collaborators/#check-if-a-user-is-a-collaborator\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.checkCollaborator({owner, repo, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.checkCollaborator({owner, repo, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.checkCollaborator({owner, repo, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/compare/:base...:head",
    "title": "compareCommits",
    "name": "compareCommits",
    "description": "<p>Both <code>:base</code> and <code>:head</code> must be branch names in <code>:repo</code>. To compare branches across other repositories in the same network as <code>:repo</code>, use the format <code>&lt;USERNAME&gt;:branch</code>. For example:</p> <pre><code>GET /repos/:owner/:repo/compare/hubot:branchname...octocat:branchname </code></pre> <p>The response from the API is equivalent to running the <code>git log base..head</code> command; however, commits are returned in reverse chronological order.</p> <p>Pass the appropriate <a href=\"https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests\">media type</a> to fetch diff and patch formats. <em>Working with large comparisons</em>*</p> <p>The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the <a href=\"https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository\">Commit List API</a> to enumerate all commits in the range.</p> <p>For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long to generate. You can typically resolve this error by using a smaller commit range. <a href=\"https://developer.github.com/v3/repos/commits/#compare-two-commits\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "base",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "head",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.compareCommits({owner, repo, base, head})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.compareCommits({owner, repo, base, head}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.compareCommits({owner, repo, base, head}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/user/repos",
    "title": "create",
    "name": "create",
    "description": "<p><strong>Note</strong>: There are two endpoints for creating a repository: one to create a repository on a user account, and one to create a repository in an organization. The organization endpoint is fully enabled for <a href=\"https://developer.github.com/v3/apps/available-endpoints/\">GitHub Apps</a>, whereas the user endpoint is enabled only for <a href=\"https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests\">user-to-server requests</a>. <em>OAuth scope requirements</em>*</p> <p>When using <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">OAuth</a>, authorizations must include: <code>public_repo</code> scope or <code>repo</code> scope to create a public repository <code>repo</code> scope to create a private repository <a href=\"https://developer.github.com/v3/repos/#create\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A short description of the repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "homepage",
            "description": "<p>A URL with more information about the repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "private",
            "defaultValue": "false",
            "description": "<p>Either <code>true</code> to create a private repository or <code>false</code> to create a public one. Creating private repositories requires a paid GitHub account.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_issues",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to enable issues for this repository or <code>false</code> to disable them.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_projects",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to enable projects for this repository or <code>false</code> to disable them. <strong>Note:</strong> If you're creating a repository in an organization that has disabled repository projects, the default is <code>false</code>, and if you pass <code>true</code>, the API returns an error.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_wiki",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to enable the wiki for this repository or <code>false</code> to disable it.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "team_id",
            "description": "<p>The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "auto_init",
            "defaultValue": "false",
            "description": "<p>Pass <code>true</code> to create an initial commit with empty README.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "gitignore_template",
            "description": "<p>Desired language or platform <a href=\"https://github.com/github/gitignore\">.gitignore template</a> to apply. Use the name of the template without the extension. For example, &quot;Haskell&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "license_template",
            "description": "<p>Choose an <a href=\"https://choosealicense.com/\">open source license template</a> that best suits your needs, and then use the <a href=\"https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type\">license keyword</a> as the <code>license_template</code> string. For example, &quot;mit&quot; or &quot;mpl-2.0&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_squash_merge",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to allow squash-merging pull requests, or <code>false</code> to prevent squash-merging.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_merge_commit",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to allow merging pull requests with a merge commit, or <code>false</code> to prevent merging pull requests with merge commits.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_rebase_merge",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to allow rebase-merging pull requests, or <code>false</code> to prevent rebase-merging.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.create({name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.create({name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.create({name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/commits/:sha/comments",
    "title": "createCommitComment",
    "name": "createCommitComment",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/comments/#create-a-commit-comment\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>The contents of the comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "path",
            "description": "<p>Relative path of the file to comment on.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "position",
            "description": "<p>Line index in the diff to comment on.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "line",
            "description": "<p><strong>Deprecated</strong>. Use <strong>position</strong> parameter instead. Line number in the file to comment on.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createCommitComment({owner, repo, sha, body, path, position, line})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createCommitComment({owner, repo, sha, body, path, position, line}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createCommitComment({owner, repo, sha, body, path, position, line}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/deployments",
    "title": "createDeployment",
    "name": "createDeployment",
    "description": "<p>Deployments offer a few configurable parameters with sane defaults.</p> <p>The <code>ref</code> parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them before we merge a pull request.</p> <p>The <code>environment</code> parameter allows deployments to be issued to different runtime environments. Teams often have multiple environments for verifying their applications, such as <code>production</code>, <code>staging</code>, and <code>qa</code>. This allows for easy tracking of which environments had deployments requested. The default environment is <code>production</code>.</p> <p>The <code>auto_merge</code> parameter is used to ensure that the requested ref is not behind the repository's default branch. If the ref <em>is</em> behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds, the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will return a failure response.</p> <p>By default, <a href=\"https://developer.github.com/v3/repos/statuses\">commit statuses</a> for every submitted context must be in a <code>success</code> state. The <code>required_contexts</code> parameter allows you to specify a subset of contexts that must be <code>success</code>, or to specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do not require any contexts or create any commit statuses, the deployment will always succeed.</p> <p>The <code>payload</code> parameter is available for any extra information that a deployment system might need. It is a JSON text field that will be passed on when a deployment event is dispatched.</p> <p>The <code>task</code> parameter is used by the deployment system to allow different execution paths. In the web world this might be <code>deploy:migrations</code> to run schema changes on the system. In the compiled world this could be a flag to compile an application with debugging enabled.</p> <p>Users with <code>repo</code> or <code>repo_deployment</code> scopes can create a deployment for a given ref:</p> <p>A simple example putting the user and room into the payload to notify back to chat networks.</p> <p>A more advanced example specifying required commit statuses and bypassing auto-merging.</p> <p>This error happens when the <code>auto_merge</code> option is enabled and when the default branch (in this case <code>master</code>), can't be merged into the branch that's being deployed (in this case <code>topic-branch</code>), due to merge conflicts.</p> <p>This error happens when the <code>required_contexts</code> parameter indicates that one or more contexts need to have a <code>success</code> status for the commit to be deployed, but one or more of the required contexts do not have a state of <code>success</code>. <a href=\"https://developer.github.com/v3/repos/deployments/#create-a-deployment\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": "<p>The ref to deploy. This can be a branch, tag, or SHA.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "task",
            "defaultValue": "deploy",
            "description": "<p>Specifies a task to execute (e.g., <code>deploy</code> or <code>deploy:migrations</code>).</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "auto_merge",
            "defaultValue": "true",
            "description": "<p>Attempts to automatically merge the default branch into the requested ref, if it is behind the default branch.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "required_contexts",
            "description": "<p>The status contexts to verify against commit status checks. If this parameter is omitted, then all unique contexts will be verified before a deployment is created. To bypass checking entirely pass an empty array. Defaults to all unique contexts.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "payload",
            "description": "<p>&quot;&quot;]  JSON payload with extra information about the deployment.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "environment",
            "defaultValue": "production",
            "description": "<p>Name for the target deployment environment (e.g., <code>production</code>, <code>staging</code>, <code>qa</code>).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>&quot;&quot;]  Short description of the deployment.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "transient_environment",
            "defaultValue": "false",
            "description": "<p>Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. <strong>This parameter requires a custom media type to be specified. Please see more in the alert below.</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "production_environment",
            "defaultValue": "`true` when `environment` is `production` and `false` otherwise",
            "description": "<p>Specifies if the given environment is one that end-users directly interact with. <strong>This parameter requires a custom media type to be specified. Please see more in the alert below.</strong></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createDeployment({owner, repo, ref, task, auto_merge, required_contexts, payload, environment, description, transient_environment, production_environment})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createDeployment({owner, repo, ref, task, auto_merge, required_contexts, payload, environment, description, transient_environment, production_environment}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createDeployment({owner, repo, ref, task, auto_merge, required_contexts, payload, environment, description, transient_environment, production_environment}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/deployments/:id/statuses",
    "title": "createDeploymentStatus",
    "name": "createDeploymentStatus",
    "description": "<p>Users with push access can create deployment statuses for a given deployment: <a href=\"https://developer.github.com/v3/repos/deployments/#create-a-deployment-status\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "error",
              "failure",
              "inactive",
              "pending",
              "success"
            ],
            "optional": false,
            "field": "state",
            "description": "<p>The state of the status. Can be one of <code>error</code>, <code>failure</code>, <code>inactive</code>, <code>pending</code>, or <code>success</code>. <strong>The <code>inactive</code> state requires a custom media type to be specified. Please see more in the alert below.</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "target_url",
            "description": "<p>&quot;&quot;]  The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "log_url",
            "description": "<p>&quot;&quot;]  This is functionally equivalent to <code>target_url</code>. We will continue accept <code>target_url</code> to support legacy uses, but we recommend modifying this to the new name to avoid confusion. <strong>This parameter requires a custom media type to be specified. Please see more in the alert below.</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>&quot;&quot;]  A short description of the status. Maximum length of 140 characters.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "environment_url",
            "description": "<p>&quot;&quot;]  Sets the URL for accessing your environment. <strong>This parameter requires a custom media type to be specified. Please see more in the alert below.</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "auto_inactive",
            "defaultValue": "true",
            "description": "<p>Adds a new <code>inactive</code> status to all non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. <strong>This parameter requires a custom media type to be specified. Please see more in the alert below.</strong></p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createDeploymentStatus({owner, repo, id, state, target_url, log_url, description, environment_url, auto_inactive})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createDeploymentStatus({owner, repo, id, state, target_url, log_url, description, environment_url, auto_inactive}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createDeploymentStatus({owner, repo, id, state, target_url, log_url, description, environment_url, auto_inactive}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "createFile",
    "name": "createFile",
    "description": "<p>This method creates a new file in a repository</p> <p>The <code>author</code> section is optional and is filled in with the <code>committer</code> information if omitted. If the <code>committer</code> information is omitted, the authenticated user's information is used.</p> <p>You must provide values for both <code>name</code> and <code>email</code>, whether you choose to use <code>author</code> or <code>committer</code>. Otherwise, you'll receive a <code>422</code> status code.</p> <p>Both the <code>author</code> and <code>committer</code> parameters have the same keys:</p> <table> <thead> <tr> <th>name</th> <th>type</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>name</td> <td>string</td> <td>The name of the author (or committer) of the commit</td> </tr> <tr> <td>email</td> <td>string</td> <td>The email of the author (or committer) of the commit</td> </tr> </tbody> </table>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": "<p>The content path.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The commit message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>The new file content, Base64 encoded.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "branch",
            "defaultValue": "the repository’s default branch (usually `master`)",
            "description": "<p>The branch name.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "committer",
            "description": "<p>object containing information about the committer.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "author",
            "description": "<p>object containing information about the author.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createFile({owner, repo, path, message, content, branch, committer, author})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createFile({owner, repo, path, message, content, branch, committer, author}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createFile({owner, repo, path, message, content, branch, committer, author}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/orgs/:org/repos",
    "title": "createForOrg",
    "name": "createForOrg",
    "description": "<p><strong>Note</strong>: There are two endpoints for creating a repository: one to create a repository on a user account, and one to create a repository in an organization. The organization endpoint is fully enabled for <a href=\"https://developer.github.com/v3/apps/available-endpoints/\">GitHub Apps</a>, whereas the user endpoint is enabled only for <a href=\"https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests\">user-to-server requests</a>. <em>OAuth scope requirements</em>*</p> <p>When using <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">OAuth</a>, authorizations must include: <code>public_repo</code> scope or <code>repo</code> scope to create a public repository <code>repo</code> scope to create a private repository <a href=\"https://developer.github.com/v3/repos/#create\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A short description of the repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "homepage",
            "description": "<p>A URL with more information about the repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "private",
            "defaultValue": "false",
            "description": "<p>Either <code>true</code> to create a private repository or <code>false</code> to create a public one. Creating private repositories requires a paid GitHub account.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_issues",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to enable issues for this repository or <code>false</code> to disable them.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_projects",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to enable projects for this repository or <code>false</code> to disable them. <strong>Note:</strong> If you're creating a repository in an organization that has disabled repository projects, the default is <code>false</code>, and if you pass <code>true</code>, the API returns an error.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_wiki",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to enable the wiki for this repository or <code>false</code> to disable it.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "team_id",
            "description": "<p>The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "auto_init",
            "defaultValue": "false",
            "description": "<p>Pass <code>true</code> to create an initial commit with empty README.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "gitignore_template",
            "description": "<p>Desired language or platform <a href=\"https://github.com/github/gitignore\">.gitignore template</a> to apply. Use the name of the template without the extension. For example, &quot;Haskell&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "license_template",
            "description": "<p>Choose an <a href=\"https://choosealicense.com/\">open source license template</a> that best suits your needs, and then use the <a href=\"https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type\">license keyword</a> as the <code>license_template</code> string. For example, &quot;mit&quot; or &quot;mpl-2.0&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_squash_merge",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to allow squash-merging pull requests, or <code>false</code> to prevent squash-merging.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_merge_commit",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to allow merging pull requests with a merge commit, or <code>false</code> to prevent merging pull requests with merge commits.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_rebase_merge",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to allow rebase-merging pull requests, or <code>false</code> to prevent rebase-merging.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createForOrg({org, name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createForOrg({org, name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createForOrg({org, name, description, homepage, private, has_issues, has_projects, has_wiki, team_id, auto_init, gitignore_template, license_template, allow_squash_merge, allow_merge_commit, allow_rebase_merge}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/hooks",
    "title": "createHook",
    "name": "createHook",
    "description": "<p>Repositories can have multiple webhooks installed. Each webhook should have a unique <code>config</code>. Multiple webhooks can share the same <code>config</code> as long as those webhooks do not have any <code>events</code> that overlap. <em>Note</em>*: Repository service hooks (like email or Campfire) can have at most one configured at a time. Creating hooks for a service that already has one configured will <a href=\"#edit-a-hook\">update the existing hook</a>. <em>Note</em>*: GitHub Services will no longer be supported as of October 1, 2018. Please see the <a href=\"/changes/2018-04-25-github-services-deprecation\">blog post</a> for details. You can use the <a href=\"https://developer.github.com/v3/guides/replacing-github-services\">Replacing GitHub Services guide</a> to help you update your services to webhooks.</p> <p>Here's how you can create a hook that posts payloads in JSON format: <a href=\"https://developer.github.com/v3/repos/hooks/#create-a-hook\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Use &quot;web&quot; for a webhook or use the name of a valid service. You can use <a href=\"https://api.github.com/hooks\">/hooks</a> for the list of valid service names. <strong>Note</strong>: GitHub Services will no longer be supported as of October 1, 2018. Please see the <a href=\"/changes/2018-04-25-github-services-deprecation\">blog post</a> for details.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "config",
            "description": "<p>Key/value pairs to provide settings for this webhook. <a href=\"#create-hook-config-params\">These are defined below</a>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "config:url",
            "description": "<p>The URL to which the payloads will be delivered.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:content_type",
            "description": "<p>The media type used to serialize the payloads. Supported values include <code>json</code> and <code>form</code>. The default is <code>form</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:secret",
            "description": "<p>If provided, the <code>secret</code> will be used as the <code>key</code> to generate the HMAC hex digest value in the <a href=\"https://developer.github.com/webhooks/#delivery-headers\"><code>X-Hub-Signature</code></a> header.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:insecure_ssl",
            "description": "<p>Determines whether the SSL certificate of the host for <code>url</code> will be verified when delivering payloads. Supported values include <code>0</code> (verification is performed) and <code>1</code> (verification is not performed). The default is <code>0</code>. <strong>We strongly recommend not setting this to <code>1</code> as you are subject to man-in-the-middle and other attacks.</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "events",
            "defaultValue": "[",
            "description": "<p>push&quot;]&quot;]  Determines what <a href=\"https://developer.github.com/v3/activity/events/types/\">events</a> the hook is triggered for.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>Determines if notifications are sent when the webhook is triggered. Set to <code>true</code> to send notifications.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createHook({owner, repo, name, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createHook({owner, repo, name, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createHook({owner, repo, name, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, active}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/releases",
    "title": "createRelease",
    "name": "createRelease",
    "description": "<p>Users with push access to the repository can create a release. <a href=\"https://developer.github.com/v3/repos/releases/#create-a-release\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag_name",
            "description": "<p>The name of the tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "target_commitish",
            "defaultValue": "the repository's default branch (usually `master`):",
            "description": "<p>Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The name of the release.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>Text describing the contents of the tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "draft",
            "defaultValue": "false",
            "description": "<p><code>true</code> to create a draft (unpublished) release, <code>false</code> to create a published one.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "prerelease",
            "defaultValue": "false",
            "description": "<p><code>true</code> to identify the release as a prerelease. <code>false</code> to identify the release as a full release.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createRelease({owner, repo, tag_name, target_commitish, name, body, draft, prerelease}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/statuses/:sha",
    "title": "createStatus",
    "name": "createStatus",
    "description": "<p>Users with push access in a repository can create commit statuses for a given SHA.</p> <p>Note: there is a limit of 1000 statuses per <code>sha</code> and <code>context</code> within a repository. Attempts to create more than 1000 statuses will result in a validation error. <a href=\"https://developer.github.com/v3/repos/statuses/#create-a-status\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "error",
              "failure",
              "pending",
              "success"
            ],
            "optional": false,
            "field": "state",
            "description": "<p>The state of the status. Can be one of <code>error</code>, <code>failure</code>, <code>pending</code>, or <code>success</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "target_url",
            "description": "<p>The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.<br> For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:<br> <code>http://ci.example.com/user/repo/build/sha</code></p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A short description of the status.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "context",
            "defaultValue": "default",
            "description": "<p>A string label to differentiate this status from the status of other systems.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.createStatus({owner, repo, sha, state, target_url, description, context}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo",
    "title": "delete",
    "name": "delete",
    "description": "<p>Deleting a repository requires admin access. If OAuth is used, the <code>delete_repo</code> scope is required.</p> <p>If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, a member will get this response: <a href=\"https://developer.github.com/v3/repos/#delete-a-repository\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.delete({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.delete({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.delete({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/releases/assets/:id",
    "title": "deleteAsset",
    "name": "deleteAsset",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/releases/#delete-a-release-asset\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteAsset({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteAsset({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteAsset({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/comments/:id",
    "title": "deleteCommitComment",
    "name": "deleteCommitComment",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/comments/#delete-a-commit-comment\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteCommitComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteCommitComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteCommitComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/keys/:id",
    "title": "deleteDeployKey",
    "name": "deleteDeployKey",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/keys/#remove-a-deploy-key\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteDeployKey({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteDeployKey({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteDeployKey({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/downloads/:id",
    "title": "deleteDownload",
    "name": "deleteDownload",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/downloads/#delete-a-download\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteDownload({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteDownload({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteDownload({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "deleteFile",
    "name": "deleteFile",
    "description": "<p>This method deletes a file in a repository</p> <p>The <code>author</code> section is optional and is filled in with the <code>committer</code> information if omitted. If the <code>committer</code> information is omitted, the authenticated user's information is used.</p> <p>You must provide values for both <code>name</code> and <code>email</code>, whether you choose to use <code>author</code> or <code>committer</code>. Otherwise, you'll receive a <code>422</code> status code.</p> <p>Both the <code>author</code> and <code>committer</code> parameters have the same keys:</p> <table> <thead> <tr> <th>name</th> <th>type</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>name</td> <td>string</td> <td>The name of the author (or committer) of the commit</td> </tr> <tr> <td>email</td> <td>string</td> <td>The email of the author (or committer) of the commit</td> </tr> </tbody> </table>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": "<p>The content path.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The commit message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": "<p>The blob SHA of the file being replaced.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "branch",
            "defaultValue": "the repository’s default branch (usually `master`)",
            "description": "<p>The branch name.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "committer",
            "description": "<p>object containing information about the committer.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "author",
            "description": "<p>object containing information about the author.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteFile({owner, repo, path, message, sha, branch, committer, author}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/hooks/:id",
    "title": "deleteHook",
    "name": "deleteHook",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/hooks/#delete-a-hook\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteHook({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteHook({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteHook({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/invitations/:invitation_id",
    "title": "deleteInvite",
    "name": "deleteInvite",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/invitations/#delete-a-repository-invitation\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteInvite({owner, repo, invitation_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteInvite({owner, repo, invitation_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteInvite({owner, repo, invitation_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/releases/:id",
    "title": "deleteRelease",
    "name": "deleteRelease",
    "description": "<p>Users with push access to the repository can delete a release. <a href=\"https://developer.github.com/v3/repos/releases/#delete-a-release\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.deleteRelease({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.deleteRelease({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.deleteRelease({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo",
    "title": "edit",
    "name": "edit",
    "description": "<p><strong>Note</strong>: To edit a repository's topics, use the <a href=\"#replace-all-topics-for-a-repository\"><code>topics</code> endpoint</a>. <a href=\"https://developer.github.com/v3/repos/#edit\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": "<p>A short description of the repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "homepage",
            "description": "<p>A URL with more information about the repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "private",
            "defaultValue": "false",
            "description": "<p>Either <code>true</code> to make the repository private or <code>false</code> to make it public. Creating private repositories requires a paid GitHub account. Default: <code>false</code>.<br> <em>Note</em>*: You will get a <code>422</code> error if the organization restricts <a href=\"https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories\">changing repository visibility</a> to organization owners and a non-owner tries to change the value of private. <strong>Note</strong>: You will get a <code>422</code> error if the organization restricts <a href=\"https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories\">changing repository visibility</a> to organization owners and a non-owner tries to change the value of private.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_issues",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to enable issues for this repository or <code>false</code> to disable them.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_projects",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to enable projects for this repository or <code>false</code> to disable them. <strong>Note:</strong> If you're creating a repository in an organization that has disabled repository projects, the default is <code>false</code>, and if you pass <code>true</code>, the API returns an error.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "has_wiki",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to enable the wiki for this repository or <code>false</code> to disable it.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "default_branch",
            "description": "<p>Updates the default branch for this repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_squash_merge",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to allow squash-merging pull requests, or <code>false</code> to prevent squash-merging.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_merge_commit",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to allow merging pull requests with a merge commit, or <code>false</code> to prevent merging pull requests with merge commits.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "allow_rebase_merge",
            "defaultValue": "true",
            "description": "<p>Either <code>true</code> to allow rebase-merging pull requests, or <code>false</code> to prevent rebase-merging.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "archived",
            "defaultValue": "false",
            "description": "<p><code>true</code> to archive this repository. <strong>Note</strong>: You cannot unarchive repositories through the API.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.edit({owner, repo, name, description, homepage, private, has_issues, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, allow_rebase_merge, archived})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.edit({owner, repo, name, description, homepage, private, has_issues, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, allow_rebase_merge, archived}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.edit({owner, repo, name, description, homepage, private, has_issues, has_projects, has_wiki, default_branch, allow_squash_merge, allow_merge_commit, allow_rebase_merge, archived}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/releases/assets/:id",
    "title": "editAsset",
    "name": "editAsset",
    "description": "<p>Users with push access to the repository can edit a release asset. <a href=\"https://developer.github.com/v3/repos/releases/#edit-a-release-asset\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The file name of the asset.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "label",
            "description": "<p>An alternate short description of the asset. Used in place of the filename.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.editAsset({owner, repo, id, name, label})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.editAsset({owner, repo, id, name, label}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.editAsset({owner, repo, id, name, label}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/hooks/:id",
    "title": "editHook",
    "name": "editHook",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/hooks/#edit-a-hook\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "config",
            "description": "<p>Key/value pairs to provide settings for this webhook. <a href=\"#create-hook-config-params\">These are defined below</a>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "config:url",
            "description": "<p>The URL to which the payloads will be delivered.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:content_type",
            "description": "<p>The media type used to serialize the payloads. Supported values include <code>json</code> and <code>form</code>. The default is <code>form</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:secret",
            "description": "<p>If provided, the <code>secret</code> will be used as the <code>key</code> to generate the HMAC hex digest value in the <a href=\"https://developer.github.com/webhooks/#delivery-headers\"><code>X-Hub-Signature</code></a> header.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "config:insecure_ssl",
            "description": "<p>Determines whether the SSL certificate of the host for <code>url</code> will be verified when delivering payloads. Supported values include <code>0</code> (verification is performed) and <code>1</code> (verification is not performed). The default is <code>0</code>. <strong>We strongly recommend not setting this to <code>1</code> as you are subject to man-in-the-middle and other attacks.</strong></p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "events",
            "defaultValue": "[",
            "description": "<p>push&quot;]&quot;]  Determines what <a href=\"https://developer.github.com/v3/activity/events/types/\">events</a> the hook is triggered for. This replaces the entire array of events.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "add_events",
            "description": "<p>Determines a list of events to be added to the list of events that the Hook triggers for.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "remove_events",
            "description": "<p>Determines a list of events to be removed from the list of events that the Hook triggers for.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>Determines if notifications are sent when the webhook is triggered. Set to <code>true</code> to send notifications.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.editHook({owner, repo, id, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, add_events, remove_events, active})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.editHook({owner, repo, id, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, add_events, remove_events, active}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.editHook({owner, repo, id, config, config.url, config.content_type, config.secret, config.insecure_ssl, events, add_events, remove_events, active}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/releases/:id",
    "title": "editRelease",
    "name": "editRelease",
    "description": "<p>Users with push access to the repository can edit a release. <a href=\"https://developer.github.com/v3/repos/releases/#edit-a-release\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "tag_name",
            "description": "<p>The name of the tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "target_commitish",
            "defaultValue": "the repository's default branch (usually `master`):",
            "description": "<p>Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The name of the release.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "body",
            "description": "<p>Text describing the contents of the tag.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "draft",
            "description": "<p><code>true</code> makes the release a draft, and <code>false</code> publishes the release.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "prerelease",
            "description": "<p><code>true</code> to identify the release as a prerelease, <code>false</code> to identify the release as a full release.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.editRelease({owner, repo, id, tag_name, target_commitish, name, body, draft, prerelease})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.editRelease({owner, repo, id, tag_name, target_commitish, name, body, draft, prerelease}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.editRelease({owner, repo, id, tag_name, target_commitish, name, body, draft, prerelease}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/forks",
    "title": "fork",
    "name": "fork",
    "description": "<p>Create a fork for the authenticated user.</p> <p>Forking a Repository happens asynchronously. Therefore, you may have to wait a short period before accessing the git objects. If this takes longer than 5 minutes, be sure to contact <a href=\"https://github.com/contact\">GitHub support</a>. <a href=\"https://developer.github.com/v3/repos/forks/#create-a-fork\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "organization",
            "description": "<p>Optional parameter to specify the organization name if forking into an organization.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.fork({owner, repo, organization})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.fork({owner, repo, organization}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.fork({owner, repo, organization}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo",
    "title": "get",
    "name": "get",
    "description": "<p>The <code>parent</code> and <code>source</code> objects are present when the repository is a fork. <code>parent</code> is the repository this repository was forked from, <code>source</code> is the ultimate source for the network. <a href=\"https://developer.github.com/v3/repos/#get\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.get({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.get({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.get({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/user/repos",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>List repositories that are accessible to the authenticated user.</p> <p>This includes repositories owned by the authenticated user, repositories where the authenticated user is a collaborator, and repositories that the authenticated user has access to through an organization membership. <a href=\"https://developer.github.com/v3/repos/#list-your-repositories\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "public",
              "private"
            ],
            "optional": true,
            "field": "visibility",
            "defaultValue": "all",
            "description": "<p>Can be one of <code>all</code>, <code>public</code>, or <code>private</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "owner",
              "collaborator",
              "organization_member"
            ],
            "optional": true,
            "field": "affiliation",
            "defaultValue": "owner,collaborator,organization_member",
            "description": "<p>Comma-separated list of values. Can include:<br> * <code>owner</code>: Repositories that are owned by the authenticated user.<br> * <code>collaborator</code>: Repositories that the user has been added to as a collaborator.<br> * <code>organization_member</code>: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "owner",
              "public",
              "private",
              "member"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "all",
            "description": "<p>Can be one of <code>all</code>, <code>owner</code>, <code>public</code>, <code>private</code>, <code>member</code>. Default: <code>all</code></p> <p>Will cause a <code>422</code> error if used in the same request as <strong>visibility</strong> or <strong>affiliation</strong>. Will cause a <code>422</code> error if used in the same request as <strong>visibility</strong> or <strong>affiliation</strong>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "pushed",
              "full_name"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "full_name",
            "description": "<p>Can be one of <code>created</code>, <code>updated</code>, <code>pushed</code>, <code>full_name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "when using `full_name`: `asc`; otherwise `desc`",
            "description": "<p>Can be one of <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getAll({visibility, affiliation, type, sort, direction, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getAll({visibility, affiliation, type, sort, direction, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getAll({visibility, affiliation, type, sort, direction, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/comments",
    "title": "getAllCommitComments",
    "name": "getAllCommitComments",
    "description": "<p>Commit Comments use <a href=\"#custom-media-types\">these custom media types</a>. You can read more about the use of media types in the API <a href=\"https://developer.github.com/v3/media/\">here</a>.</p> <p>Comments are ordered by ascending ID. <a href=\"https://developer.github.com/v3/repos/comments/#list-commit-comments-for-a-repository\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getAllCommitComments({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getAllCommitComments({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getAllCommitComments({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/:archive_format/:ref",
    "title": "getArchiveLink",
    "name": "getArchiveLink",
    "description": "<p>This method will return a <code>302</code> to a URL to download a tarball or zipball archive for a repository. Please make sure your HTTP framework is configured to follow redirects or you will need to use the <code>Location</code> header to make a second <code>GET</code> request.</p> <p><em>Note</em>: For private repositories, these links are temporary and expire after five minutes.</p> <p>To follow redirects with curl, use the <code>-L</code> switch:</p> <p><a href=\"https://developer.github.com/v3/repos/contents/#get-archive-link\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "tarball",
              "zipball"
            ],
            "optional": false,
            "field": "archive_format",
            "defaultValue": "tarball",
            "description": "<p>Can be either <code>tarball</code> or <code>zipball</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "defaultValue": "the repository’s default branch (usually `master`)",
            "description": "<p>A valid Git reference.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getArchiveLink({owner, repo, archive_format, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getArchiveLink({owner, repo, archive_format, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getArchiveLink({owner, repo, archive_format, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/assets/:id",
    "title": "getAsset",
    "name": "getAsset",
    "description": "<p>To download the asset's binary content, set the <code>Accept</code> header of the request to <a href=\"https://developer.github.com/v3/media/#media-types\"><code>application/octet-stream</code></a>. The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a <code>200</code> or <code>302</code> response. <a href=\"https://developer.github.com/v3/repos/releases/#get-a-single-release-asset\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getAsset({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getAsset({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getAsset({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/:id/assets",
    "title": "getAssets",
    "name": "getAssets",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/releases/#list-assets-for-a-release\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getAssets({owner, repo, id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getAssets({owner, repo, id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getAssets({owner, repo, id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch",
    "title": "getBranch",
    "name": "getBranch",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#get-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getBranch({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getBranch({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getBranch({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection",
    "title": "getBranchProtection",
    "name": "getBranchProtection",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#get-branch-protection\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getBranchProtection({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getBranchProtection({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getBranchProtection({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches",
    "title": "getBranches",
    "name": "getBranches",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#list-branches\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "protected",
            "description": "<p>Setting to <code>true</code> returns only protected branches.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getBranches({owner, repo, protected, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getBranches({owner, repo, protected, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getBranches({owner, repo, protected, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/clones",
    "title": "getClones",
    "name": "getClones",
    "description": "<p>Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday. <a href=\"https://developer.github.com/v3/repos/traffic/#clones\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week"
            ],
            "optional": true,
            "field": "per",
            "defaultValue": "day",
            "description": "<p>Must be one of: <code>day</code>, <code>week</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getClones({owner, repo, per})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getClones({owner, repo, per}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getClones({owner, repo, per}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/collaborators",
    "title": "getCollaborators",
    "name": "getCollaborators",
    "description": "<p>For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.</p> <p>If you pass the <code>hellcat-preview</code> media type, team members will include the members of child teams. <a href=\"https://developer.github.com/v3/repos/collaborators/#list-collaborators\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "outside",
              "direct",
              "all"
            ],
            "optional": true,
            "field": "affiliation",
            "defaultValue": "all",
            "description": "<p>Filter collaborators returned by their affiliation. Can be one of:<br> * <code>outside</code>: All outside collaborators of an organization-owned repository.<br> * <code>direct</code>: All collaborators with permissions to an organization-owned repository, regardless of organization membership status.<br> * <code>all</code>: All collaborators the authenticated user can see.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCollaborators({owner, repo, affiliation, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCollaborators({owner, repo, affiliation, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCollaborators({owner, repo, affiliation, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/status",
    "title": "getCombinedStatusForRef",
    "name": "getCombinedStatusForRef",
    "description": "<p>Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.</p> <p>The most recent status for each context is returned, up to 100. This field <a href=\"https://developer.github.com/v3/#pagination\">paginates</a> if there are over 100 contexts.</p> <p>Additionally, a combined <code>state</code> is returned. The <code>state</code> is one of: <strong>failure</strong> if any of the contexts report as <code>error</code> or <code>failure</code> <strong>pending</strong> if there are no statuses or a context is <code>pending</code> <strong>success</strong> if the latest status for all contexts is <code>success</code> <a href=\"https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCombinedStatusForRef({owner, repo, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCombinedStatusForRef({owner, repo, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCombinedStatusForRef({owner, repo, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:sha",
    "title": "getCommit",
    "name": "getCommit",
    "description": "<p>Diffs with binary data will have no 'patch' property. Pass the appropriate <a href=\"https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests\">media type</a> to fetch diff and patch formats. <a href=\"https://developer.github.com/v3/repos/commits/#get-a-single-commit\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCommit({owner, repo, sha})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCommit({owner, repo, sha}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCommit({owner, repo, sha}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/comments/:id",
    "title": "getCommitComment",
    "name": "getCommitComment",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/comments/#get-a-single-commit-comment\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCommitComment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCommitComment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCommitComment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/comments",
    "title": "getCommitComments",
    "name": "getCommitComments",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/comments/#list-comments-for-a-single-commit\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCommitComments({owner, repo, ref, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCommitComments({owner, repo, ref, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCommitComments({owner, repo, ref, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits",
    "title": "getCommits",
    "name": "getCommits",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sha",
            "defaultValue": "the repository’s default branch (usually `master`):",
            "description": "<p>SHA or branch to start listing commits from.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "path",
            "description": "<p>Only commits containing this file path will be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "author",
            "description": "<p>GitHub login or email address by which to filter by commit author.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>Only commits after this date will be returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "until",
            "description": "<p>Only commits before this date will be returned. This is a timestamp in ISO 8601 format: <code>YYYY-MM-DDTHH:MM:SSZ</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCommits({owner, repo, sha, path, author, since, until, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCommits({owner, repo, sha, path, author, since, until, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCommits({owner, repo, sha, path, author, since, until, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:name/community/profile",
    "title": "getCommunityProfileMetrics",
    "name": "getCommunityProfileMetrics",
    "description": "<p>This endpoint will return all community profile metrics, including an overall health score, repository description, the presence of documentation, detected code of conduct, detected license, and the presence of ISSUE_TEMPLATE, PULL_REQUEST_TEMPLATE, README, and CONTRIBUTING files. <a href=\"https://developer.github.com/v3/repos/community/#retrieve-community-profile-metrics\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getCommunityProfileMetrics({owner, name})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getCommunityProfileMetrics({owner, name}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getCommunityProfileMetrics({owner, name}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "getContent",
    "name": "getContent",
    "description": "<p>This method returns the contents of a file or directory in a repository.</p> <p>Files and symlinks support <a href=\"#custom-media-types\">a custom media type</a> for retrieving the raw content or rendered HTML (when supported). All content types support <a href=\"#custom-media-types\">a custom media type</a> to ensure the content is returned in a consistent object format. <em>Note</em>*: To get a repository's contents recursively, you can <a href=\"https://developer.github.com/v3/git/trees/\">recursively get the tree</a>. This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the <a href=\"https://developer.github.com/v3/git/trees/#get-a-tree\">Git Trees API</a>. This API supports files up to 1 megabyte in size.</p> <p>The response will be an array of objects, one object for each item in the directory.</p> <p>When listing the contents of a directory, submodules have their &quot;type&quot; specified as &quot;file&quot;. Logically, the value <em>should</em> be &quot;submodule&quot;. This behavior exists in API v3 <a href=\"https://git.io/v1YCW\">for backwards compatibility purposes</a>. In the next major version of the API, the type will be returned as &quot;submodule&quot;.</p> <p>If the requested <code>:path</code> points to a symlink, and the symlink's target is a normal file in the repository, then the API responds with the content of the file (in the <a href=\"#response-if-content-is-a-file\">format shown above</a>).</p> <p>Otherwise, the API responds with an object describing the symlink itself:</p> <p>The <code>submodule_git_url</code> identifies the location of the submodule repository, and the <code>sha</code> identifies a specific commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out the submodule at that specific commit.</p> <p>If the submodule repository is not hosted on github.com, the Git URLs (<code>git_url</code> and <code>_links[&quot;git&quot;]</code>) and the github.com URLs (<code>html_url</code> and <code>_links[&quot;html&quot;]</code>) will have null values. <a href=\"https://developer.github.com/v3/repos/contents/#get-contents\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": "<p>The content path.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ref",
            "defaultValue": "the repository’s default branch (usually `master`)",
            "description": "<p>The name of the commit/branch/tag.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getContent({owner, repo, path, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getContent({owner, repo, path, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getContent({owner, repo, path, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/contributors",
    "title": "getContributors",
    "name": "getContributors",
    "description": "<p>Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.</p> <p>GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information. <a href=\"https://developer.github.com/v3/repos/#list-contributors\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "anon",
            "description": "<p>Set to <code>1</code> or <code>true</code> to include anonymous contributors in results.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getContributors({owner, repo, anon, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getContributors({owner, repo, anon, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getContributors({owner, repo, anon, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/keys/:id",
    "title": "getDeployKey",
    "name": "getDeployKey",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/keys/#get-a-deploy-key\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeployKey({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeployKey({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeployKey({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/keys",
    "title": "getDeployKeys",
    "name": "getDeployKeys",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/keys/#list-deploy-keys\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeployKeys({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeployKeys({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeployKeys({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments/:id",
    "title": "getDeployment",
    "name": "getDeployment",
    "description": "<p><em>Note:</em>* If a user created a deployment via a GitHub App, the <code>performed_via_github_app</code> key will contain information on that GitHub App. <a href=\"https://developer.github.com/v3/repos/deployments/#get-a-single-deployment\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeployment({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeployment({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeployment({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments/:id/statuses/:status_id",
    "title": "getDeploymentStatus",
    "name": "getDeploymentStatus",
    "description": "<p>Users with pull access can view a deployment status for a deployment: <em>Note:</em>* If a user created a deployment status via a GitHub App, the <code>performed_via_github_app</code> key will contain information on that GitHub App. <a href=\"https://developer.github.com/v3/repos/deployments/#get-a-single-deployment-status\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>The deployment ID to list the statuses from.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "status_id",
            "description": "<p>The deployment status ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeploymentStatus({owner, repo, id, status_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeploymentStatus({owner, repo, id, status_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeploymentStatus({owner, repo, id, status_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments/:id/statuses",
    "title": "getDeploymentStatuses",
    "name": "getDeploymentStatuses",
    "description": "<p>Users with pull access can view deployment statuses for a deployment: <a href=\"https://developer.github.com/v3/repos/deployments/#list-deployment-statuses\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>The deployment ID to list the statuses from.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeploymentStatuses({owner, repo, id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeploymentStatuses({owner, repo, id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeploymentStatuses({owner, repo, id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/deployments",
    "title": "getDeployments",
    "name": "getDeployments",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/deployments/#list-deployments\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sha",
            "defaultValue": "none",
            "description": "<p>The SHA that was recorded at creation time.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ref",
            "defaultValue": "none",
            "description": "<p>The name of the ref. This can be a branch, tag, or SHA.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "task",
            "defaultValue": "none",
            "description": "<p>The name of the task for the deployment (e.g., <code>deploy</code> or <code>deploy:migrations</code>).</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "environment",
            "defaultValue": "none",
            "description": "<p>The name of the environment that was deployed to (e.g., <code>staging</code> or <code>production</code>).</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDeployments({owner, repo, sha, ref, task, environment, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDeployments({owner, repo, sha, ref, task, environment, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDeployments({owner, repo, sha, ref, task, environment, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/downloads/:id",
    "title": "getDownload",
    "name": "getDownload",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/downloads/#get-a-single-download\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDownload({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDownload({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDownload({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/downloads",
    "title": "getDownloads",
    "name": "getDownloads",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/downloads/#list-downloads-for-a-repository\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getDownloads({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getDownloads({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getDownloads({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/orgs/:org/repos",
    "title": "getForOrg",
    "name": "getForOrg",
    "description": "<p>List repositories for the specified org. <a href=\"https://developer.github.com/v3/repos/#list-organization-repositories\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "public",
              "private",
              "forks",
              "sources",
              "member"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "all",
            "description": "<p>Can be one of <code>all</code>, <code>public</code>, <code>private</code>, <code>forks</code>, <code>sources</code>, <code>member</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getForOrg({org, type, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getForOrg({org, type, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getForOrg({org, type, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/users/:username/repos",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>List public repositories for the specified user. <a href=\"https://developer.github.com/v3/repos/#list-user-repositories\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "all",
              "owner",
              "member"
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "owner",
            "description": "<p>Can be one of <code>all</code>, <code>owner</code>, <code>member</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "created",
              "updated",
              "pushed",
              "full_name"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "full_name",
            "description": "<p>Can be one of <code>created</code>, <code>updated</code>, <code>pushed</code>, <code>full_name</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "direction",
            "defaultValue": "when using `full_name`: `asc`, otherwise `desc`",
            "description": "<p>Can be one of <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getForUser({username, type, sort, direction, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getForUser({username, type, sort, direction, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getForUser({username, type, sort, direction, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/forks",
    "title": "getForks",
    "name": "getForks",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/forks/#list-forks\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "newest",
              "oldest",
              "stargazers"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "newest",
            "description": "<p>The sort order. Can be either <code>newest</code>, <code>oldest</code>, or <code>stargazers</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getForks({owner, repo, sort, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getForks({owner, repo, sort, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getForks({owner, repo, sort, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/hooks/:id",
    "title": "getHook",
    "name": "getHook",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/hooks/#get-single-hook\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getHook({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getHook({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getHook({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/hooks",
    "title": "getHooks",
    "name": "getHooks",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/hooks/#list-hooks\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getHooks({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getHooks({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getHooks({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/invitations",
    "title": "getInvites",
    "name": "getInvites",
    "description": "<p>When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.</p> <p><a href=\"https://developer.github.com/v3/repos/invitations/#list-invitations-for-a-repository\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getInvites({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getInvites({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getInvites({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/languages",
    "title": "getLanguages",
    "name": "getLanguages",
    "description": "<p>Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language. <a href=\"https://developer.github.com/v3/repos/#list-languages\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getLanguages({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getLanguages({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getLanguages({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages/builds/latest",
    "title": "getLatestPagesBuild",
    "name": "getLatestPagesBuild",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/pages/#get-latest-pages-build\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getLatestPagesBuild({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getLatestPagesBuild({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getLatestPagesBuild({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/latest",
    "title": "getLatestRelease",
    "name": "getLatestRelease",
    "description": "<p>View the latest published full release for the repository. Draft releases and prereleases are not returned by this endpoint. <a href=\"https://developer.github.com/v3/repos/releases/#get-the-latest-release\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getLatestRelease({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getLatestRelease({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getLatestRelease({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages",
    "title": "getPages",
    "name": "getPages",
    "description": "<p>Responses during the preview period contain two additional fields: <code>html_url</code>: The absolute URL (with scheme) to the rendered site. For example, <code>https://username.github.io</code>. <code>source</code>: Information about the source branch and directory for the rendered site. The source field includes: <code>branch</code>: The repo branch for <a href=\"https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/\">site source files</a> For example, <em>master</em> or <em>gh-pages</em>. <code>path</code>: The repo directory from which the site publishes. Can be either <code>/</code> or <code>/docs</code>. <a href=\"https://developer.github.com/v3/repos/pages/#get-information-about-a-pages-site\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getPages({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getPages({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getPages({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages/builds/:id",
    "title": "getPagesBuild",
    "name": "getPagesBuild",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/pages/#get-a-specific-pages-build\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getPagesBuild({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getPagesBuild({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getPagesBuild({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/pages/builds",
    "title": "getPagesBuilds",
    "name": "getPagesBuilds",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/pages/#list-pages-builds\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getPagesBuilds({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getPagesBuilds({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getPagesBuilds({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/popular/paths",
    "title": "getPaths",
    "name": "getPaths",
    "description": "<p>Get the top 10 popular contents over the last 14 days. <a href=\"https://developer.github.com/v3/repos/traffic/#list-paths\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getPaths({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getPaths({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getPaths({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    "title": "getProtectedBranchAdminEnforcement",
    "name": "getProtectedBranchAdminEnforcement",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#get-admin-enforcement-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchAdminEnforcement({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    "title": "getProtectedBranchPullRequestReviewEnforcement",
    "name": "getProtectedBranchPullRequestReviewEnforcement",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#get-pull-request-review-enforcement-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchPullRequestReviewEnforcement({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    "title": "getProtectedBranchRequiredStatusChecks",
    "name": "getProtectedBranchRequiredStatusChecks",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#get-required-status-checks-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchRequiredStatusChecks({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "getProtectedBranchRequiredStatusChecksContexts",
    "name": "getProtectedBranchRequiredStatusChecksContexts",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#list-required-status-checks-contexts-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchRequiredStatusChecksContexts({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchRequiredStatusChecksContexts({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchRequiredStatusChecksContexts({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions",
    "title": "getProtectedBranchRestrictions",
    "name": "getProtectedBranchRestrictions",
    "description": "<p><strong>Note</strong>: Teams and users <code>restrictions</code> are only available for organization-owned repositories. <a href=\"https://developer.github.com/v3/repos/branches/#get-restrictions-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "getProtectedBranchTeamRestrictions",
    "name": "getProtectedBranchTeamRestrictions",
    "description": "<p>Lists the teams who have push access to this branch. If you pass the <code>hellcat-preview</code> media type, the list includes child teams. <a href=\"https://developer.github.com/v3/repos/branches/#list-team-restrictions-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchTeamRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchTeamRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchTeamRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "getProtectedBranchUserRestrictions",
    "name": "getProtectedBranchUserRestrictions",
    "description": "<p>Lists the people who have push access to this branch. <a href=\"https://developer.github.com/v3/repos/branches/#list-user-restrictions-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getProtectedBranchUserRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getProtectedBranchUserRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getProtectedBranchUserRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repositories",
    "title": "getPublic",
    "name": "getPublic",
    "description": "<p>This provides a dump of every public repository, in the order that they were created.</p> <p>Note: Pagination is powered exclusively by the <code>since</code> parameter. Use the <a href=\"https://developer.github.com/v3/#link-header\">Link header</a> to get the URL for the next page of repositories. <a href=\"https://developer.github.com/v3/repos/#list-all-public-repositories\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>The integer ID of the last Repository that you've seen.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getPublic({since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getPublic({since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getPublic({since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/readme",
    "title": "getReadme",
    "name": "getReadme",
    "description": "<p>This method returns the preferred README for a repository.</p> <p>READMEs support <a href=\"#custom-media-types\">custom media types</a> for retrieving the raw content or rendered HTML. <a href=\"https://developer.github.com/v3/repos/contents/#get-the-readme\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "ref",
            "defaultValue": "the repository’s default branch (usually `master`)",
            "description": "<p>The name of the commit/branch/tag.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getReadme({owner, repo, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getReadme({owner, repo, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getReadme({owner, repo, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/popular/referrers",
    "title": "getReferrers",
    "name": "getReferrers",
    "description": "<p>Get the top 10 referrers over the last 14 days. <a href=\"https://developer.github.com/v3/repos/traffic/#list-referrers\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getReferrers({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getReferrers({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getReferrers({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/:id",
    "title": "getRelease",
    "name": "getRelease",
    "description": "<p><strong>Note:</strong> This returns an <code>upload_url</code> key corresponding to the endpoint for uploading release assets. This key is a <a href=\"https://developer.github.com/v3/#hypermedia\">hypermedia resource</a>. <a href=\"https://developer.github.com/v3/repos/releases/#get-a-single-release\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getRelease({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getRelease({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getRelease({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases/tags/:tag",
    "title": "getReleaseByTag",
    "name": "getReleaseByTag",
    "description": "<p>Get a published release with the specified tag. <a href=\"https://developer.github.com/v3/repos/releases/#get-a-release-by-tag-name\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tag",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getReleaseByTag({owner, repo, tag})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getReleaseByTag({owner, repo, tag}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getReleaseByTag({owner, repo, tag}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/releases",
    "title": "getReleases",
    "name": "getReleases",
    "description": "<p>This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the <a href=\"https://developer.github.com/v3/repos/#list-tags\">Repository Tags API</a>.</p> <p>Information about published releases are available to everyone. Only users with push access will receive listings for draft releases. <a href=\"https://developer.github.com/v3/repos/releases/#list-releases-for-a-repository\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getReleases({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getReleases({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getReleases({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref",
    "title": "getShaOfCommitRef",
    "name": "getShaOfCommitRef",
    "description": "<p>Users with read access can get the SHA-1 of a commit reference:</p> <p>To access the API you must provide a custom <a href=\"https://developer.github.com/v3/media\">media type</a> in the <code>Accept</code> header:</p> <p>To check if a remote reference's SHA-1 is the same as your local reference's SHA-1, make a <code>GET</code> request and provide the current SHA-1 for the local reference as the ETag.</p> <p>The SHA-1 of the commit reference.</p> <p><a href=\"https://developer.github.com/v3/repos/commits/#get-the-sha-1-of-a-commit-reference\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getShaOfCommitRef({owner, repo, ref})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getShaOfCommitRef({owner, repo, ref}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getShaOfCommitRef({owner, repo, ref}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/code_frequency",
    "title": "getStatsCodeFrequency",
    "name": "getStatsCodeFrequency",
    "description": "<p>Returns a weekly aggregate of the number of additions and deletions pushed to a repository.</p> <p><a href=\"https://developer.github.com/v3/repos/statistics/#get-the-number-of-additions-and-deletions-per-week\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatsCodeFrequency({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatsCodeFrequency({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatsCodeFrequency({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/commit_activity",
    "title": "getStatsCommitActivity",
    "name": "getStatsCommitActivity",
    "description": "<p>Returns the last year of commit activity grouped by week. The <code>days</code> array is a group of commits per day, starting on <code>Sunday</code>.</p> <p><a href=\"https://developer.github.com/v3/repos/statistics/#get-the-last-year-of-commit-activity-data\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatsCommitActivity({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatsCommitActivity({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatsCommitActivity({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/contributors",
    "title": "getStatsContributors",
    "name": "getStatsContributors",
    "description": "<ul> <li><code>total</code> - The Total number of commits authored by the contributor.</li> </ul> <p>Weekly Hash (<code>weeks</code> array): <code>w</code> - Start of the week, given as a <a href=\"http://en.wikipedia.org/wiki/Unix_time\">Unix timestamp</a>. <code>a</code> - Number of additions <code>d</code> - Number of deletions <code>c</code> - Number of commits</p> <p><a href=\"https://developer.github.com/v3/repos/statistics/#get-contributors-list-with-additions-deletions-and-commit-counts\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatsContributors({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatsContributors({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatsContributors({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/participation",
    "title": "getStatsParticipation",
    "name": "getStatsParticipation",
    "description": "<p>Returns the total commit counts for the <code>owner</code> and total commit counts in <code>all</code>. <code>all</code> is everyone combined, including the <code>owner</code> in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract <code>owner</code> from <code>all</code>.</p> <p>The array order is oldest week (index 0) to most recent week.</p> <p><a href=\"https://developer.github.com/v3/repos/statistics/#get-the-weekly-commit-count-for-the-repository-owner-and-everyone-else\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatsParticipation({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatsParticipation({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatsParticipation({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/stats/punch_card",
    "title": "getStatsPunchCard",
    "name": "getStatsPunchCard",
    "description": "<p>Each array contains the day number, hour number, and number of commits: <code>0-6</code>: Sunday - Saturday <code>0-23</code>: Hour of day Number of commits</p> <p>For example, <code>[2, 14, 25]</code> indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits. <a href=\"https://developer.github.com/v3/repos/statistics/#get-the-number-of-commits-per-hour-in-each-day\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatsPunchCard({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatsPunchCard({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatsPunchCard({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/commits/:ref/statuses",
    "title": "getStatuses",
    "name": "getStatuses",
    "description": "<p>Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.</p> <p>This resource is also available via a legacy route: <code>GET /repos/:owner/:repo/statuses/:ref</code>. <a href=\"https://developer.github.com/v3/repos/statuses/#list-statuses-for-a-specific-ref\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ref",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getStatuses({owner, repo, ref, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getStatuses({owner, repo, ref, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getStatuses({owner, repo, ref, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/tags",
    "title": "getTags",
    "name": "getTags",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/#list-tags\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getTags({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getTags({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getTags({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/teams",
    "title": "getTeams",
    "name": "getTeams",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/#list-teams\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getTeams({owner, repo, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getTeams({owner, repo, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getTeams({owner, repo, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/topics",
    "title": "getTopics",
    "name": "getTopics",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/#list-all-topics-for-a-repository\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getTopics({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getTopics({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getTopics({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/traffic/views",
    "title": "getViews",
    "name": "getViews",
    "description": "<p>Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday. <a href=\"https://developer.github.com/v3/repos/traffic/#views\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "day",
              "week"
            ],
            "optional": true,
            "field": "per",
            "defaultValue": "day",
            "description": "<p>Must be one of: <code>day</code>, <code>week</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.getViews({owner, repo, per})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.getViews({owner, repo, per}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.getViews({owner, repo, per}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/merges",
    "title": "merge",
    "name": "merge",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/merging/#perform-a-merge\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "base",
            "description": "<p>The name of the base branch that the head will be merged into.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "head",
            "description": "<p>The head to merge. This can be a branch name or a commit SHA1.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "commit_message",
            "description": "<p>Commit message to use for the merge commit. If omitted, a default message will be used.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.merge({owner, repo, base, head, commit_message})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.merge({owner, repo, base, head, commit_message}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.merge({owner, repo, base, head, commit_message}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/hooks/:id/pings",
    "title": "pingHook",
    "name": "pingHook",
    "description": "<p>This will trigger a <a href=\"https://developer.github.com/webhooks/#ping-event\">ping event</a> to be sent to the hook. <a href=\"https://developer.github.com/v3/repos/hooks/#ping-a-hook\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.pingHook({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.pingHook({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.pingHook({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection",
    "title": "removeBranchProtection",
    "name": "removeBranchProtection",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#remove-branch-protection\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeBranchProtection({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeBranchProtection({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeBranchProtection({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/collaborators/:username",
    "title": "removeCollaborator",
    "name": "removeCollaborator",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/collaborators/#remove-user-as-a-collaborator\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeCollaborator({owner, repo, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeCollaborator({owner, repo, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeCollaborator({owner, repo, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/enforce_admins",
    "title": "removeProtectedBranchAdminEnforcement",
    "name": "removeProtectedBranchAdminEnforcement",
    "description": "<p>Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled. <a href=\"https://developer.github.com/v3/repos/branches/#remove-admin-enforcement-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchAdminEnforcement({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    "title": "removeProtectedBranchPullRequestReviewEnforcement",
    "name": "removeProtectedBranchPullRequestReviewEnforcement",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#remove-pull-request-review-enforcement-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchPullRequestReviewEnforcement({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    "title": "removeProtectedBranchRequiredStatusChecks",
    "name": "removeProtectedBranchRequiredStatusChecks",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#remove-required-status-checks-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchRequiredStatusChecks({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "removeProtectedBranchRequiredStatusChecksContexts",
    "name": "removeProtectedBranchRequiredStatusChecksContexts",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#remove-required-status-checks-contexts-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchRequiredStatusChecksContexts({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions",
    "title": "removeProtectedBranchRestrictions",
    "name": "removeProtectedBranchRestrictions",
    "description": "<p>Disables the ability to restrict who can push to this branch. <a href=\"https://developer.github.com/v3/repos/branches/#remove-restrictions-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "removeProtectedBranchTeamRestrictions",
    "name": "removeProtectedBranchTeamRestrictions",
    "description": "<p>Removes the ability of a team to push to this branch. If you pass the <code>hellcat-preview</code> media type, you can include child teams.</p> <table> <thead> <tr> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><code>array</code></td> <td>Teams that should no longer have push access. Use the team's <code>slug</code>. <strong>Note</strong>: The list of users and teams in total is limited to 100 items.</td> </tr> </tbody> </table>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchTeamRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "DELETE",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "removeProtectedBranchUserRestrictions",
    "name": "removeProtectedBranchUserRestrictions",
    "description": "<p>Removes the ability of a team to push to this branch.</p> <table> <thead> <tr> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><code>array</code></td> <td>Usernames of the people who should no longer have push access. <strong>Note</strong>: The list of users and teams in total is limited to 100 items.</td> </tr> </tbody> </table>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.removeProtectedBranchUserRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts",
    "title": "replaceProtectedBranchRequiredStatusChecksContexts",
    "name": "replaceProtectedBranchRequiredStatusChecksContexts",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/branches/#replace-required-status-checks-contexts-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.replaceProtectedBranchRequiredStatusChecksContexts({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/teams",
    "title": "replaceProtectedBranchTeamRestrictions",
    "name": "replaceProtectedBranchTeamRestrictions",
    "description": "<p>Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. If you pass the <code>hellcat-preview</code> media type, you can include child teams.</p> <table> <thead> <tr> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><code>array</code></td> <td>The teams that can have push access. Use the team's <code>slug</code>. <strong>Note</strong>: The list of users and teams in total is limited to 100 items.</td> </tr> </tbody> </table>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.replaceProtectedBranchTeamRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection/restrictions/users",
    "title": "replaceProtectedBranchUserRestrictions",
    "name": "replaceProtectedBranchUserRestrictions",
    "description": "<p>Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.</p> <table> <thead> <tr> <th>Type</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td><code>array</code></td> <td>Usernames for people who can have push access. <strong>Note</strong>: The list of users and teams in total is limited to 100 items.</td> </tr> </tbody> </table>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.replaceProtectedBranchUserRestrictions({owner, repo, branch}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/topics",
    "title": "replaceTopics",
    "name": "replaceTopics",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/#replace-all-topics-for-a-repository\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "names",
            "description": "<p>An array of topics to add to the repository. Pass one or more topics to <em>replace</em> the set of existing topics. Send an empty array (<code>[]</code>) to clear all topics from the repository.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.replaceTopics({owner, repo, names})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.replaceTopics({owner, repo, names}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.replaceTopics({owner, repo, names}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/pages/builds",
    "title": "requestPageBuild",
    "name": "requestPageBuild",
    "description": "<p>You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.</p> <p>Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes. <a href=\"https://developer.github.com/v3/repos/pages/#request-a-page-build\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.requestPageBuild({owner, repo})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.requestPageBuild({owner, repo}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.requestPageBuild({owner, repo}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/repos/:owner/:repo/collaborators/:username/permission",
    "title": "reviewUserPermissionLevel",
    "name": "reviewUserPermissionLevel",
    "description": "<p>Possible values for the <code>permission</code> key: <code>admin</code>, <code>write</code>, <code>read</code>, <code>none</code>. <a href=\"https://developer.github.com/v3/repos/collaborators/#review-a-users-permission-level\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.reviewUserPermissionLevel({owner, repo, username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.reviewUserPermissionLevel({owner, repo, username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.reviewUserPermissionLevel({owner, repo, username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": "/repos/:owner/:repo/hooks/:id/tests",
    "title": "testHook",
    "name": "testHook",
    "description": "<p>This will trigger the hook with the latest push to the current repository if the hook is subscribed to <code>push</code> events. If the hook is not subscribed to <code>push</code> events, the server will respond with 204 but no test POST will be generated. <em>Note</em>*: Previously <code>/repos/:owner/:repo/hooks/:id/test</code> <a href=\"https://developer.github.com/v3/repos/hooks/#test-a-push-hook\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.testHook({owner, repo, id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.testHook({owner, repo, id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.testHook({owner, repo, id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/branches/:branch/protection",
    "title": "updateBranchProtection",
    "name": "updateBranchProtection",
    "description": "<p>Protecting a branch requires admin or owner permissions to the repository. <em>Note</em>*: Passing new arrays of <code>users</code> and <code>teams</code> replaces their previous values. <em>Note</em>*: The list of users and teams in total is limited to 100 items. <a href=\"https://developer.github.com/v3/repos/branches/#update-branch-protection\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "required_status_checks",
            "description": "<p>Require status checks to pass before merging. Set to <code>null</code> to disable.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "required_status_checks:strict",
            "description": "<p>Require branches to be up to date before merging.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "required_status_checks:contexts",
            "description": "<p>The list of status checks to require in order to merge into this branch</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "enforce_admins",
            "description": "<p>Enforce all configured restrictions for administrators. Set to <code>true</code> to enforce required status checks for repository administrators. Set to <code>null</code> to disable.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "required_pull_request_reviews",
            "description": "<p>Require at least one approving review on a pull request, before merging. Set to <code>null</code> to disable.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "required_pull_request_reviews:dismissal_restrictions",
            "description": "<p>Specify which users and teams can dismiss pull request reviews. Pass an empty <code>dismissal_restrictions</code> object to disable. User and team <code>dismissal_restrictions</code> are only available for organization-owned repositories. Omit this parameter for personal repositories.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "required_pull_request_reviews:dismissal_restrictions:users",
            "description": "<p>The list of user <code>login</code>s with dismissal access</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "required_pull_request_reviews:dismissal_restrictions:teams",
            "description": "<p>The list of team <code>slug</code>s with dismissal access</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "required_pull_request_reviews:dismiss_stale_reviews",
            "description": "<p>Set to <code>true</code> if you want to automatically dismiss approving reviews when someone pushes a new commit.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "required_pull_request_reviews:require_code_owner_reviews",
            "description": "<p>Blocks merging pull requests until code owners review them.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "required_pull_request_reviews:required_approving_review_count",
            "description": "<p>Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "restrictions",
            "description": "<p>Restrict who can push to this branch. Team and user <code>restrictions</code> are only available for organization-owned repositories. Set to <code>null</code> to disable.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "restrictions:users",
            "description": "<p>The list of user <code>login</code>s with push access</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "restrictions:teams",
            "description": "<p>The list of team <code>slug</code>s with push access</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_status_checks.strict, required_status_checks.contexts, enforce_admins, required_pull_request_reviews, required_pull_request_reviews.dismissal_restrictions, required_pull_request_reviews.dismissal_restrictions.users, required_pull_request_reviews.dismissal_restrictions.teams, required_pull_request_reviews.dismiss_stale_reviews, required_pull_request_reviews.require_code_owner_reviews, required_pull_request_reviews.required_approving_review_count, restrictions, restrictions.users, restrictions.teams})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_status_checks.strict, required_status_checks.contexts, enforce_admins, required_pull_request_reviews, required_pull_request_reviews.dismissal_restrictions, required_pull_request_reviews.dismissal_restrictions.users, required_pull_request_reviews.dismissal_restrictions.teams, required_pull_request_reviews.dismiss_stale_reviews, required_pull_request_reviews.require_code_owner_reviews, required_pull_request_reviews.required_approving_review_count, restrictions, restrictions.users, restrictions.teams}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateBranchProtection({owner, repo, branch, required_status_checks, required_status_checks.strict, required_status_checks.contexts, enforce_admins, required_pull_request_reviews, required_pull_request_reviews.dismissal_restrictions, required_pull_request_reviews.dismissal_restrictions.users, required_pull_request_reviews.dismissal_restrictions.teams, required_pull_request_reviews.dismiss_stale_reviews, required_pull_request_reviews.require_code_owner_reviews, required_pull_request_reviews.required_approving_review_count, restrictions, restrictions.users, restrictions.teams}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/comments/:id",
    "title": "updateCommitComment",
    "name": "updateCommitComment",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/comments/#update-a-commit-comment\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "body",
            "description": "<p>The contents of the comment</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateCommitComment({owner, repo, id, body})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateCommitComment({owner, repo, id, body}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateCommitComment({owner, repo, id, body}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PUT",
    "url": "/repos/:owner/:repo/contents/:path",
    "title": "updateFile",
    "name": "updateFile",
    "description": "<p>This method updates a file in a repository</p> <p>The <code>author</code> section is optional and is filled in with the <code>committer</code> information if omitted. If the <code>committer</code> information is omitted, the authenticated user's information is used.</p> <p>You must provide values for both <code>name</code> and <code>email</code>, whether you choose to use <code>author</code> or <code>committer</code>. Otherwise, you'll receive a <code>422</code> status code.</p> <p>Both the <code>author</code> and <code>committer</code> parameters have the same keys:</p> <table> <thead> <tr> <th>name</th> <th>type</th> <th>description</th> </tr> </thead> <tbody> <tr> <td>name</td> <td>string</td> <td>The name of the author (or committer) of the commit</td> </tr> <tr> <td>email</td> <td>string</td> <td>The email of the author (or committer) of the commit</td> </tr> </tbody> </table>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "path",
            "description": "<p>The content path.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The commit message.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>The updated file content, Base64 encoded.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sha",
            "description": "<p>The blob SHA of the file being replaced.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "branch",
            "defaultValue": "the repository’s default branch (usually `master`)",
            "description": "<p>The branch name.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "committer",
            "description": "<p>object containing information about the committer.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "author",
            "description": "<p>object containing information about the author.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, author})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, author}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateFile({owner, repo, path, message, content, sha, branch, committer, author}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/invitations/:invitation_id",
    "title": "updateInvite",
    "name": "updateInvite",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/invitations/#update-a-repository-invitation\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "read",
              "write",
              "admin"
            ],
            "optional": true,
            "field": "permissions",
            "description": "<p>The permissions that the associated user will have on the repository. Valid values are <code>read</code>, <code>write</code>, and <code>admin</code>.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateInvite({owner, repo, invitation_id, permissions})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateInvite({owner, repo, invitation_id, permissions}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateInvite({owner, repo, invitation_id, permissions}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews",
    "title": "updateProtectedBranchPullRequestReviewEnforcement",
    "name": "updateProtectedBranchPullRequestReviewEnforcement",
    "description": "<p>Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled. <em>Note</em>*: Passing new arrays of <code>users</code> and <code>teams</code> replaces their previous values. <a href=\"https://developer.github.com/v3/repos/branches/#update-pull-request-review-enforcement-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": true,
            "field": "dismissal_restrictions",
            "description": "<p>Specify which users and teams can dismiss pull request reviews. Pass an empty <code>dismissal_restrictions</code> object to disable. User and team <code>dismissal_restrictions</code> are only available for organization-owned repositories. Omit this parameter for personal repositories.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "dismissal_restrictions:users",
            "description": "<p>The list of user <code>login</code>s with dismissal access</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "dismissal_restrictions:teams",
            "description": "<p>The list of team <code>slug</code>s with dismissal access</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "dismiss_stale_reviews",
            "description": "<p>Set to <code>true</code> if you want to automatically dismiss approving reviews when someone pushes a new commit.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "require_code_owner_reviews",
            "description": "<p>Blocks merging pull requests until code owners have reviewed.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "required_approving_review_count",
            "description": "<p>Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismissal_restrictions.users, dismissal_restrictions.teams, dismiss_stale_reviews, require_code_owner_reviews, required_approving_review_count})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismissal_restrictions.users, dismissal_restrictions.teams, dismiss_stale_reviews, require_code_owner_reviews, required_approving_review_count}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateProtectedBranchPullRequestReviewEnforcement({owner, repo, branch, dismissal_restrictions, dismissal_restrictions.users, dismissal_restrictions.teams, dismiss_stale_reviews, require_code_owner_reviews, required_approving_review_count}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "PATCH",
    "url": "/repos/:owner/:repo/branches/:branch/protection/required_status_checks",
    "title": "updateProtectedBranchRequiredStatusChecks",
    "name": "updateProtectedBranchRequiredStatusChecks",
    "description": "<p>Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled. <a href=\"https://developer.github.com/v3/repos/branches/#update-required-status-checks-of-protected-branch\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "owner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "branch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "strict",
            "description": "<p>Require branches to be up to date before merging.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": true,
            "field": "contexts",
            "description": "<p>The list of status checks to require in order to merge into this branch</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.updateProtectedBranchRequiredStatusChecks({owner, repo, branch, strict, contexts}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "POST",
    "url": ":url",
    "title": "uploadAsset",
    "name": "uploadAsset",
    "description": "<p>This endpoint makes use of <a href=\"https://developer.github.com/v3/#hypermedia\">a Hypermedia relation</a> to determine which URL to access. This endpoint is provided by a URI template in <a href=\"#get-a-single-release\">the release's API response</a>. You need to use an HTTP client which supports <a href=\"http://en.wikipedia.org/wiki/Server_Name_Indication\">SNI</a> to make calls to this endpoint.</p> <p>The asset data is expected in its raw binary form, rather than JSON. Everything else about the endpoint is the same as the rest of the API. For example, you'll still need to pass your authentication to be able to upload an asset.</p> <p>Send the raw binary content of the asset as the request body.</p> <p>This may leave an empty asset with a state of <code>&quot;new&quot;</code>. It can be safely deleted. <a href=\"https://developer.github.com/v3/repos/releases/#upload-a-release-asset\">REST API doc</a></p>",
    "group": "Repos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "Content-Length",
            "description": "<p>The content size of the asset in bytes</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>The content type of the asset. This should be set in the Header. Example: <code>&quot;application/zip&quot;</code>. For a list of acceptable types, refer this list of <a href=\"https://www.iana.org/assignments/media-types/media-types.xhtml\">media types</a>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The file name of the asset. This should be set in a URI query parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "label",
            "description": "<p>An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.repos.uploadAsset({url, Content-Length, Content-Type, name, label})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.repos.uploadAsset({url, Content-Length, Content-Type, name, label}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.repos.uploadAsset({url, Content-Length, Content-Type, name, label}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Repos"
  },
  {
    "type": "GET",
    "url": "/search/code",
    "title": "code",
    "name": "code",
    "description": "<p>Find file contents via various criteria. This method returns up to 100 results <a href=\"https://developer.github.com/v3/#pagination\">per page</a>. <em>Note:</em>* You must <a href=\"https://developer.github.com/v3/#authentication\">authenticate</a> to search for code across all public repositories. <em>Considerations for code search</em>*</p> <p>Due to the complexity of searching code, there are a few restrictions on how searches are performed: Only the <em>default branch</em> is considered. In most cases, this will be the <code>master</code> branch. Only files smaller than 384 KB are searchable. You must always include at least one search term when searching source code. For example, searching for <a href=\"https://github.com/search?utf8=%E2%9C%93&amp;q=language%3Ago&amp;type=Code\"><code>language:go</code></a> is not valid, while <a href=\"https://github.com/search?utf8=%E2%9C%93&amp;q=amazing+language%3Ago&amp;type=Code\"><code>amazing language:go</code></a> is.</p> <p>The <code>q</code> search term can also contain any combination of the supported code search qualifiers as described by the in-browser <a href=\"https://help.github.com/articles/searching-code/\">code search documentation</a> and <a href=\"https://help.github.com/articles/search-syntax/\">search syntax documentation</a>: <a href=\"https://help.github.com/articles/searching-code#scope-the-search-fields\"><code>in</code></a> Qualifies which fields are searched. With this qualifier you can restrict the search to the file contents (<code>file</code>), the file path (<code>path</code>), or both. <a href=\"https://help.github.com/articles/searching-code#search-by-language\"><code>language</code></a> Searches code based on the language it's written in. <a href=\"https://help.github.com/articles/searching-code#search-by-the-number-of-forks-the-parent-repository-has\"><code>fork</code></a> Specifies that code from forked repositories should be searched (<code>true</code>). Repository forks will not be searchable unless the fork has more stars than the parent repository. <a href=\"https://help.github.com/articles/searching-code#search-by-the-size-of-the-parent-repository\"><code>size</code></a> Finds files that match a certain size (in bytes). <a href=\"https://help.github.com/articles/searching-code#search-by-the-location-of-a-file-within-the-repository\"><code>path</code></a> Specifies the path prefix that the resulting file must be under. <a href=\"https://help.github.com/articles/searching-code#search-by-filename\"><code>filename</code></a> Matches files by a substring of the filename. <a href=\"https://help.github.com/articles/searching-code#search-by-the-file-extension\"><code>extension</code></a> Matches files with a certain extension after a dot. <a href=\"https://help.github.com/articles/searching-code#search-within-a-users-or-organizations-repositories\"><code>user</code> or <code>repo</code></a> Limits searches to a specific user or repository.</p> <p>Suppose you want to find the definition of the <code>addClass</code> function inside <a href=\"https://github.com/jquery/jquery\">jQuery</a>. Your query would look something like this:</p> <p>Here, we're searching for the keyword <code>addClass</code> within a file's contents. We're making sure that we're only looking in files where the language is JavaScript. And we're scoping the search to the <code>repo:jquery/jquery</code> repository. <em>Highlighting code search results</em>*</p> <p>You might want to highlight the matching search terms when displaying search results. The API offers additional metadata to support this use case. To get this metadata in your search results, specify the <code>text-match</code> media type in your <code>Accept</code> header. For example, via cURL, the above query would look like this:</p> <p>This produces the same JSON payload as above, with an extra key called <code>text_matches</code>, an array of objects. These objects provide information such as the position of your search terms within the text, as well as the <code>property</code> that included the search term.</p> <p>When searching for code, you can get text match metadata for the file <strong>content</strong> and file <strong>path</strong> fields. For details on the attributes present in the <code>text_matches</code> array, see <a href=\"#text-match-metadata\">text match metadata</a>.</p> <p>Here's an example response: <a href=\"https://developer.github.com/v3/search/#search-code\">REST API doc</a></p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>The search terms.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "indexed"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "results are sorted by best match:",
            "description": "<p>The sort field. Can only be <code>indexed</code>, which indicates how recently a file has been indexed by the GitHub search infrastructure.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>The sort order if <code>sort</code> parameter is provided. One of <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.search.code({q, sort, order, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.search.code({q, sort, order, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.search.code({q, sort, order, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "/search/commits",
    "title": "commits",
    "name": "commits",
    "description": "<p>Find commits via various criteria. This method returns up to 100 results <a href=\"https://developer.github.com/v3/#pagination\">per page</a>. <em>Considerations for commit search</em>*</p> <p>Only the <em>default branch</em> is considered. In most cases, this will be the <code>master</code> branch.</p> <p>The <code>q</code> search term can also contain any combination of the supported commit search qualifiers as described by the in-browser <a href=\"https://help.github.com/articles/searching-commits/\">commit search documentation</a> and <a href=\"https://help.github.com/articles/search-syntax/\">search syntax documentation</a>: <a href=\"https://help.github.com/articles/searching-commits#search-by-author-or-committer\"><code>author</code></a> Matches commits authored by a user (based on email settings). <a href=\"https://help.github.com/articles/searching-commits#search-by-author-or-committer\"><code>committer</code></a> Matches commits committed by a user (based on email settings). <a href=\"https://help.github.com/articles/searching-commits#search-by-author-or-committer\"><code>author-name</code></a> Matches commits by author name. <a href=\"https://help.github.com/articles/searching-commits#search-by-author-or-committer\"><code>committer-name</code></a> Matches commits by committer name. <a href=\"https://help.github.com/articles/searching-commits#search-by-author-or-committer\"><code>author-email</code></a> Matches commits by author email. <a href=\"https://help.github.com/articles/searching-commits#search-by-author-or-committer\"><code>committer-email</code></a> Matches commits by committer email. <a href=\"https://help.github.com/articles/searching-commits#search-by-authored-or-committed-date\"><code>author-date</code></a> Matches commits by author date range. <a href=\"https://help.github.com/articles/searching-commits/#search-by-authored-or-committed-date\"><code>committer-date</code></a> Matches commits by committer date range. <a href=\"https://help.github.com/articles/searching-commits#filter-merge-commits\"><code>merge</code></a> <code>true</code> filters to merge commits, <code>false</code> filters out merge commits. <a href=\"https://help.github.com/articles/searching-commits#search-by-hash\"><code>hash</code></a> Matches commits by hash. <a href=\"https://help.github.com/articles/searching-commits#search-by-parent\"><code>parent</code></a> Matches commits that have a particular parent. <a href=\"https://help.github.com/articles/searching-commits#search-by-tree\"><code>tree</code></a> Matches commits by tree hash. <a href=\"https://help.github.com/articles/searching-commits#filter-to-public-or-private-repositories\"><code>is</code></a> Matches <code>public</code> or <code>private</code> repositories. <a href=\"https://help.github.com/articles/searching-commits#search-within-a-users-or-organizations-repositories\"><code>user</code>, <code>org</code>, or <code>repo</code></a> Limits searches to a specific user, organization, or repository.</p> <p>Suppose you want to find commits related to CSS in the <a href=\"https://github.com/octocat/Spoon-Knife\">octocat/Spoon-Knife</a> repository. Your query would look something like this: <em>Highlighting code search results</em>*</p> <p>When searching for commits, you can get text match metadata for the <strong>message</strong> field. See the section on <a href=\"#text-match-metadata\">text match metadata</a> for full details. <a href=\"https://developer.github.com/v3/search/#search-commits\">REST API doc</a></p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>The search terms.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "author-date",
              "committer-date"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "results are sorted by best match:",
            "description": "<p>The sort field. Can be <code>author-date</code> or <code>committer-date</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>The sort order if <code>sort</code> parameter is provided. One of <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.search.commits({q, sort, order, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.search.commits({q, sort, order, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.search.commits({q, sort, order, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "/search/issues",
    "title": "issues",
    "name": "issues",
    "description": "<p>Find issues by state and keyword. This method returns up to 100 results <a href=\"https://developer.github.com/v3/#pagination\">per page</a>.</p> <p>The <code>q</code> search term can also contain any combination of the supported issue search qualifiers as described by the in-browser <a href=\"https://help.github.com/articles/searching-issues/\">issue search documentation</a> and <a href=\"https://help.github.com/articles/search-syntax/\">search syntax documentation</a>: <a href=\"https://help.github.com/articles/searching-issues#search-issues-or-pull-requests\"><code>type</code></a> With this qualifier you can restrict the search to issues (<code>issue</code>) or pull request (<code>pr</code>) only. <a href=\"https://help.github.com/articles/searching-issues#scope-the-search-fields\"><code>in</code></a> Qualifies which fields are searched. With this qualifier you can restrict the search to just the title (<code>title</code>), body (<code>body</code>), comments (<code>comments</code>), or any combination of these. <a href=\"https://help.github.com/articles/searching-issues#search-by-the-author-of-an-issue-or-pull-request\"><code>author</code></a> Finds issues or pull requests created by a certain user. <a href=\"https://help.github.com/articles/searching-issues#search-by-the-assignee-of-an-issue-or-pull-request\"><code>assignee</code></a> Finds issues or pull requests that are assigned to a certain user. <a href=\"https://help.github.com/articles/searching-issues#search-by-a-mentioned-user-within-an-issue-or-pull-request\"><code>mentions</code></a> Finds issues or pull requests that mention a certain user. <a href=\"https://help.github.com/articles/searching-issues#search-by-a-commenter-within-an-issue-or-pull-request\"><code>commenter</code></a> Finds issues or pull requests that a certain user commented on. <a href=\"https://help.github.com/articles/searching-issues#search-by-a-user-thats-involved-within-an-issue-or-pull-request\"><code>involves</code></a> Finds issues or pull requests that were either created by a certain user, assigned to that user, mention that user, or were commented on by that user. <a href=\"https://help.github.com/articles/searching-issues/#search-by-a-team-thats-mentioned-within-an-issue-or-pull-request\"><code>team</code></a> For organizations you're a member of, finds issues or pull requests that @mention a team within the organization. <a href=\"https://help.github.com/articles/searching-issues#search-based-on-whether-an-issue-or-pull-request-is-open\"><code>state</code></a> Filter issues or pull requests based on whether they're open or closed. <a href=\"https://help.github.com/articles/searching-issues#search-by-the-labels-on-an-issue\"><code>labels</code></a> Filters issues or pull requests based on their labels. <a href=\"https://help.github.com/articles/searching-issues#search-by-missing-metadata-on-an-issue-or-pull-request\"><code>no</code></a> Filters items missing certain metadata, such as <code>label</code>, <code>milestone</code>, or <code>assignee</code> <a href=\"https://help.github.com/articles/searching-issues#search-by-the-main-language-of-a-repository\"><code>language</code></a> Searches for issues or pull requests within repositories that match a certain language. <a href=\"https://help.github.com/articles/searching-issues#search-based-on-the-state-of-an-issue-or-pull-request\"><code>is</code></a> Searches for items within repositories that match a certain state, such as <code>open</code>, <code>closed</code>, or <code>merged</code> <a href=\"https://help.github.com/articles/searching-issues#search-based-on-when-an-issue-or-pull-request-was-created-or-last-updated\"><code>created</code> or <code>updated</code></a> Filters issues or pull requests based on date of creation, or when they were last updated. <a href=\"https://help.github.com/articles/searching-issues#search-based-on-when-a-pull-request-was-merged\"><code>merged</code></a> Filters pull requests based on the date when they were merged. <a href=\"https://help.github.com/articles/searching-issues#search-based-on-commit-status\"><code>status</code></a> Filters pull requests based on the commit status. <a href=\"https://help.github.com/articles/searching-issues#search-based-on-branch-names\"><code>head</code> or <code>base</code></a> Filters pull requests based on the branch that they came from or that they are modifying. <a href=\"https://help.github.com/articles/searching-issues#search-based-on-when-an-issue-or-pull-request-was-closed\"><code>closed</code></a> Filters issues or pull requests based on the date when they were closed. <a href=\"https://help.github.com/articles/searching-issues#search-by-the-number-of-comments-an-issue-or-pull-request-has\"><code>comments</code></a> Filters issues or pull requests based on the quantity of comments. <a href=\"https://help.github.com/articles/searching-issues#search-within-a-users-or-organizations-repositories\"><code>user</code> or <code>repo</code></a> Limits searches to a specific user or repository. <a href=\"https://help.github.com/articles/searching-issues/#search-by-project-board\"><code>project</code></a> Limits searches to a specific project board in a repository or organization. <a href=\"https://help.github.com/articles/searching-issues/#search-within-archived-repositories\"><code>archived</code></a> Filters issues or pull requests based on whether they are in an archived repository.</p> <p>If you know the specific SHA hash of a commit, you can use also <a href=\"https://help.github.com/articles/searching-issues#search-by-the-commit-shas-within-a-pull-request\">use it to search for pull requests</a> that contain that SHA. Note that the SHA syntax must be at least seven characters.</p> <p>Let's say you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.</p> <p>In this query, we're searching for the keyword <code>windows</code>, within any open issue that's labeled as <code>bug</code>. The search runs across repositories whose primary language is Python. We’re sorting by creation date in ascending order, so that the oldest issues appear first in the search results. <em>Highlighting issue search results</em>*</p> <p>You might want to highlight the matching search terms when displaying search results. The API offers additional metadata to support this use case. To get this metadata in your search results, specify the <code>text-match</code> media type in your <code>Accept</code> header. For example, via cURL, the above query would look like this:</p> <p>This produces the same JSON payload as above, with an extra key called <code>text_matches</code>, an array of objects. These objects provide information such as the position of your search terms within the text, as well as the <code>property</code> that included the search term.</p> <p>When searching for issues, you can get text match metadata for the issue <strong>title</strong>, issue <strong>body</strong>, and issue <strong>comment body</strong> fields. For details on the attributes present in the <code>text_matches</code> array, see <a href=\"#text-match-metadata\">text match metadata</a>.</p> <p>Here's an example response: <a href=\"https://developer.github.com/v3/search/#search-issues\">REST API doc</a></p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>The search terms.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "comments",
              "created",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "results are sorted by best match:",
            "description": "<p>The sort field. Can be <code>comments</code>, <code>created</code>, or <code>updated</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>The sort order if <code>sort</code> parameter is provided. One of <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.search.issues({q, sort, order, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.search.issues({q, sort, order, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.search.issues({q, sort, order, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "/search/repositories",
    "title": "repos",
    "name": "repos",
    "description": "<p>Find repositories via various criteria. This method returns up to 100 results <a href=\"https://developer.github.com/v3/#pagination\">per page</a>.</p> <p>The <code>q</code> search term can also contain any combination of the supported repository search qualifiers as described by the in-browser <a href=\"https://help.github.com/articles/searching-repositories/\">repository search documentation</a> and <a href=\"https://help.github.com/articles/search-syntax/\">search syntax documentation</a>: <a href=\"https://help.github.com/articles/searching-repositories#search-based-on-when-a-repository-was-created-or-last-updated\"><code>created</code> or <code>pushed</code></a> Filters repositories based on date of creation, or when they were last updated. <a href=\"https://help.github.com/articles/searching-repositories#search-based-on-the-number-of-forks-the-parent-repository-has\"><code>fork</code></a> Filters whether forked repositories should be included (<code>true</code>) or only forked repositories should be returned (<code>only</code>). <a href=\"https://help.github.com/articles/searching-repositories#search-based-on-the-number-of-forks-the-parent-repository-has\"><code>forks</code></a> Filters repositories based on the number of forks. <a href=\"https://help.github.com/articles/searching-repositories#scope-the-search-fields\"><code>in</code></a> Qualifies which fields are searched. With this qualifier you can restrict the search to just the repository name, description, readme, or any combination of these. <a href=\"https://help.github.com/articles/searching-repositories#search-based-on-the-main-language-of-a-repository\"><code>language</code></a> Searches repositories based on the language they're written in. <a href=\"https://help.github.com/articles/searching-repositories#search-by-license\"><code>license</code></a> Filters repositories by license or license family, using the <a href=\"https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type\">license keyword</a>. <a href=\"https://help.github.com/articles/searching-repositories#search-within-a-users-or-organizations-repositories\"><code>repo</code> or <code>user</code></a> Limits searches to a specific repository or user. <a href=\"https://help.github.com/articles/searching-repositories#search-based-on-the-size-of-a-repository\"><code>size</code></a> Finds repositories that match a certain size (in kilobytes). <a href=\"https://help.github.com/articles/searching-repositories#search-based-on-the-number-of-stars-a-repository-has\"><code>stars</code></a> Searches repositories based on the number of stars. <a href=\"https://help.github.com/articles/classifying-your-repository-with-topics/\"><code>topic</code></a> Filters repositories based on the specified topic. <a href=\"https://help.github.com/articles/searching-repositories/#search-based-on-whether-a-repository-is-archived\"><code>archived</code></a> Filters whether archived repositories should be included (<code>true</code>) or not (<code>false</code>).</p> <p>Suppose you want to search for popular Tetris repositories written in Assembly. Your query might look like this.</p> <p>You can search for multiple topics by adding more <code>topic:</code> instances, and including the <code>mercy-preview</code> header. For example:</p> <p>In this request, we're searching for repositories with the word <code>tetris</code> in the name, the description, or the README. We're limiting the results to only find repositories where the primary language is Assembly. We're sorting by stars in descending order, so that the most popular repositories appear first in the search results. <em>Highlighting repository search results</em>*</p> <p>You might want to highlight the matching search terms when displaying search results. The API offers additional metadata to support this use case. To get this metadata in your search results, specify the <code>text-match</code> media type in your <code>Accept</code> header. For example, via cURL, the above query would look like this:</p> <p>This produces the same JSON payload as above, with an extra key called <code>text_matches</code>, an array of objects. These objects provide information such as the position of your search terms within the text, as well as the <code>property</code> that included the search term.</p> <p>When searching for repositories, you can get text match metadata for the <strong>name</strong> and <strong>description</strong> fields. For details on the attributes present in the <code>text_matches</code> array, see <a href=\"#text-match-metadata\">text match metadata</a>.</p> <p>Here's an example response: <a href=\"https://developer.github.com/v3/search/#search-repositories\">REST API doc</a></p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>The search keywords, as well as any qualifiers.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "stars",
              "forks",
              "updated"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "results are sorted by best match:",
            "description": "<p>The sort field. One of <code>stars</code>, <code>forks</code>, or <code>updated</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>The sort order if <code>sort</code> parameter is provided. One of <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.search.repos({q, sort, order, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.search.repos({q, sort, order, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.search.repos({q, sort, order, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Search"
  },
  {
    "type": "GET",
    "url": "/search/users",
    "title": "users",
    "name": "users",
    "description": "<p>Find users via various criteria. This method returns up to 100 results <a href=\"https://developer.github.com/v3/#pagination\">per page</a>.</p> <p>The <code>q</code> search term can also contain any combination of the supported user search qualifiers as described by the in-browser <a href=\"https://help.github.com/articles/searching-users/\">user search documentation</a> and <a href=\"https://help.github.com/articles/search-syntax/\">search syntax documentation</a>: <a href=\"https://help.github.com/articles/searching-users#search-for-users-or-organizations\"><code>type</code></a> With this qualifier you can restrict the search to just personal accounts (<code>user</code>) or just organization accounts (<code>org</code>). <a href=\"https://help.github.com/articles/searching-users#scope-the-search-fields\"><code>in</code></a> Qualifies which fields are searched. With this qualifier you can restrict the search to just the username (<code>login</code>), public email (<code>email</code>), full name (<code>fullname</code>), or any combination of these. <a href=\"https://help.github.com/articles/searching-users#search-based-on-the-number-of-repositories-a-user-has\"><code>repos</code></a> Filters users based on the number of repositories they have. <a href=\"https://help.github.com/articles/searching-users#search-based-on-the-location-where-a-user-resides\"><code>location</code></a> Filter users by the location indicated in their profile. <a href=\"https://help.github.com/articles/searching-users#search-based-on-the-languages-of-a-users-repositories\"><code>language</code></a> Search for users that have repositories that match a certain language. <a href=\"https://help.github.com/articles/searching-users#search-based-on-when-a-user-joined-github\"><code>created</code></a> Filter users based on when they joined. <a href=\"https://help.github.com/articles/searching-users#search-based-on-the-number-of-followers-a-user-has\"><code>followers</code></a> Filter users based on the number of followers they have.</p> <p>Imagine you're looking for a list of popular users. You might try out this query:</p> <p>Here, we're looking at users with the name Tom. We're only interested in those with more than 42 repositories, and only if they have over 1,000 followers. <em>Highlighting user search results</em>*</p> <p>You might want to highlight the matching search terms when displaying search results. The API offers additional metadata to support this use case. To get this metadata in your search results, specify the <code>text-match</code> media type in your <code>Accept</code> header. For example, via cURL, the above query would look like this:</p> <p>This produces the same JSON payload as above, with an extra key called <code>text_matches</code>, an array of objects. These objects provide information such as the position of your search terms within the text, as well as the <code>property</code> that included the search term.</p> <p>When searching for users, you can get text match metadata for the issue <strong>login</strong>, <strong>email</strong>, and <strong>name</strong> fields. For details on the attributes present in the <code>text_matches</code> array, see <a href=\"#text-match-metadata\">text match metadata</a>. <a href=\"https://developer.github.com/v3/search/#search-users\">REST API doc</a></p>",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "q",
            "description": "<p>The search terms.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "followers",
              "repositories",
              "joined"
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "results are sorted by best match:",
            "description": "<p>The sort field. Can be <code>followers</code>, <code>repositories</code>, or <code>joined</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "asc",
              "desc"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "desc",
            "description": "<p>The sort order if <code>sort</code> parameter is provided. One of <code>asc</code> or <code>desc</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.search.users({q, sort, order, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.search.users({q, sort, order, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.search.users({q, sort, order, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Search"
  },
  {
    "type": "PATCH",
    "url": "/user/repository_invitations/:invitation_id",
    "title": "acceptRepoInvite",
    "name": "acceptRepoInvite",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/invitations/#accept-a-repository-invitation\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.acceptRepoInvite({invitation_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.acceptRepoInvite({invitation_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.acceptRepoInvite({invitation_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/user/emails",
    "title": "addEmails",
    "name": "addEmails",
    "description": "<p>You can post a single email address or an array of addresses: <a href=\"https://developer.github.com/v3/users/emails/#add-email-addresses\">REST API doc</a></p>",
    "group": "Users",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.addEmails({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.addEmails({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.addEmails({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PUT",
    "url": "/user/installations/:installation_id/repositories/:repository_id",
    "title": "addRepoToInstallation",
    "name": "addRepoToInstallation",
    "description": "<p>Add a single repository to an installation.</p> <p>The authenticated user must have admin access to the repository. <a href=\"https://developer.github.com/v3/apps/installations/#add-repository-to-installation\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repository_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.addRepoToInstallation({installation_id, repository_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.addRepoToInstallation({installation_id, repository_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.addRepoToInstallation({installation_id, repository_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PUT",
    "url": "/user/blocks/:username",
    "title": "blockUser",
    "name": "blockUser",
    "description": "<p><a href=\"https://developer.github.com/v3/users/blocking/#block-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.blockUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.blockUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.blockUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/blocks/:username",
    "title": "checkBlockedUser",
    "name": "checkBlockedUser",
    "description": "<p>If the user is blocked:</p> <p>If the user is not blocked: <a href=\"https://developer.github.com/v3/users/blocking/#check-whether-youve-blocked-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.checkBlockedUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.checkBlockedUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.checkBlockedUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/following/:username",
    "title": "checkFollowing",
    "name": "checkFollowing",
    "description": "<p><a href=\"https://developer.github.com/v3/users/followers/#check-if-you-are-following-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.checkFollowing({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.checkFollowing({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.checkFollowing({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username/following/:target_user",
    "title": "checkIfOneFollowersOther",
    "name": "checkIfOneFollowersOther",
    "description": "<p><a href=\"https://developer.github.com/v3/users/followers/#check-if-one-user-follows-another\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "target_user",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.checkIfOneFollowersOther({username, target_user})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.checkIfOneFollowersOther({username, target_user}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.checkIfOneFollowersOther({username, target_user}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/user/gpg_keys",
    "title": "createGpgKey",
    "name": "createGpgKey",
    "description": "<p>Creates a GPG key. Requires that you are authenticated via Basic Auth, or OAuth with at least <code>write:gpg_key</code> <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">scope</a>. <a href=\"https://developer.github.com/v3/users/gpg_keys/#create-a-gpg-key\">REST API doc</a></p>",
    "group": "Users",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.createGpgKey({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.createGpgKey({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.createGpgKey({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/user/keys",
    "title": "createKey",
    "name": "createKey",
    "description": "<p>Creates a public key. Requires that you are authenticated via Basic Auth, or OAuth with at least <code>write:public_key</code> <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">scope</a>. <a href=\"https://developer.github.com/v3/users/keys/#create-a-public-key\">REST API doc</a></p>",
    "group": "Users",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.createKey({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.createKey({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.createKey({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/repository_invitations/:invitation_id",
    "title": "declineRepoInvite",
    "name": "declineRepoInvite",
    "description": "<p><a href=\"https://developer.github.com/v3/repos/invitations/#decline-a-repository-invitation\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "invitation_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.declineRepoInvite({invitation_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.declineRepoInvite({invitation_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.declineRepoInvite({invitation_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/emails",
    "title": "deleteEmails",
    "name": "deleteEmails",
    "description": "<p>You can include a single email address or an array of addresses: <a href=\"https://developer.github.com/v3/users/emails/#delete-email-addresses\">REST API doc</a></p>",
    "group": "Users",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.deleteEmails({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.deleteEmails({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.deleteEmails({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/gpg_keys/:id",
    "title": "deleteGpgKey",
    "name": "deleteGpgKey",
    "description": "<p>Removes a GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least <code>admin:gpg_key</code> <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">scope</a>. <a href=\"https://developer.github.com/v3/users/gpg_keys/#delete-a-gpg-key\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.deleteGpgKey({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.deleteGpgKey({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.deleteGpgKey({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/keys/:id",
    "title": "deleteKey",
    "name": "deleteKey",
    "description": "<p>Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least <code>admin:public_key</code> <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">scope</a>. <a href=\"https://developer.github.com/v3/users/keys/#delete-a-public-key\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.deleteKey({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.deleteKey({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.deleteKey({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PATCH",
    "url": "/user/memberships/orgs/:org",
    "title": "editOrgMembership",
    "name": "editOrgMembership",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/members/#edit-your-organization-membership\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "active"
            ],
            "optional": false,
            "field": "state",
            "description": "<p>The state that the membership should be in. Only <code>&quot;active&quot;</code> will be accepted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.editOrgMembership({org, state})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.editOrgMembership({org, state}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.editOrgMembership({org, state}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PUT",
    "url": "/user/following/:username",
    "title": "followUser",
    "name": "followUser",
    "description": "<p>Note that you'll need to set <code>Content-Length</code> to zero when calling out to this endpoint. For more information, see &quot;<a href=\"https://developer.github.com/v3/#http-verbs\">HTTP verbs</a>.&quot;</p> <p>Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the <code>user:follow</code> scope. <a href=\"https://developer.github.com/v3/users/followers/#follow-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.followUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.followUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.followUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "get",
    "name": "get",
    "description": "<p>Lists public and private profile information when authenticated through basic auth or OAuth with the <code>user</code> scope.</p> <p>Lists public profile information when authenticated through OAuth without the <code>user</code> scope. <a href=\"https://developer.github.com/v3/users/#get-the-authenticated-user\">REST API doc</a></p>",
    "group": "Users",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.get({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.get({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.get({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users",
    "title": "getAll",
    "name": "getAll",
    "description": "<p>Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.</p> <p>Note: Pagination is powered exclusively by the <code>since</code> parameter. Use the <a href=\"https://developer.github.com/v3/#link-header\">Link header</a> to get the URL for the next page of users. <a href=\"https://developer.github.com/v3/users/#get-all-users\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "since",
            "description": "<p>The integer ID of the last User that you've seen.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getAll({since, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getAll({since, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getAll({since, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/blocks",
    "title": "getBlockedUsers",
    "name": "getBlockedUsers",
    "description": "<p>List the users you've blocked on your personal account. <a href=\"https://developer.github.com/v3/users/blocking/#list-blocked-users\">REST API doc</a></p>",
    "group": "Users",
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getBlockedUsers({})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getBlockedUsers({}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getBlockedUsers({}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/emails",
    "title": "getEmails",
    "name": "getEmails",
    "description": "<p>Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the <code>user:email</code> scope. <a href=\"https://developer.github.com/v3/users/emails/#list-email-addresses-for-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getEmails({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getEmails({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getEmails({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/followers",
    "title": "getFollowers",
    "name": "getFollowers",
    "description": "<p><a href=\"https://developer.github.com/v3/users/followers/#list-followers-of-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getFollowers({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getFollowers({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getFollowers({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username/followers",
    "title": "getFollowersForUser",
    "name": "getFollowersForUser",
    "description": "<p><a href=\"https://developer.github.com/v3/users/followers/#list-followers-of-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getFollowersForUser({username, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getFollowersForUser({username, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getFollowersForUser({username, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/following",
    "title": "getFollowing",
    "name": "getFollowing",
    "description": "<p><a href=\"https://developer.github.com/v3/users/followers/#list-users-followed-by-another-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getFollowing({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getFollowing({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getFollowing({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username/following",
    "title": "getFollowingForUser",
    "name": "getFollowingForUser",
    "description": "<p><a href=\"https://developer.github.com/v3/users/followers/#list-users-followed-by-another-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getFollowingForUser({username, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getFollowingForUser({username, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getFollowingForUser({username, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username",
    "title": "getForUser",
    "name": "getForUser",
    "description": "<p>Provides publicly available information about someone with a GitHub account.</p> <p>The <code>email</code> key in the following response is the publicly visible email address from your GitHub <a href=\"https://github.com/settings/profile\">profile page</a>. When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for <code>email</code>, then it will have a value of <code>null</code>. You only see publicly visible email addresses when authenticated with GitHub. For more information, see <a href=\"https://developer.github.com/v3/#authentication\">Authentication</a>.</p> <p>The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see &quot;<a href=\"https://developer.github.com/v3/users/emails/\">Emails API</a>&quot;. <a href=\"https://developer.github.com/v3/users/#get-a-single-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getForUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getForUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getForUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/gpg_keys/:id",
    "title": "getGpgKey",
    "name": "getGpgKey",
    "description": "<p>View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least <code>read:gpg_key</code> <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">scope</a>. <a href=\"https://developer.github.com/v3/users/gpg_keys/#get-a-single-gpg-key\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getGpgKey({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getGpgKey({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getGpgKey({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/gpg_keys",
    "title": "getGpgKeys",
    "name": "getGpgKeys",
    "description": "<p>Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least <code>read:gpg_key</code> <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">scope</a>. <a href=\"https://developer.github.com/v3/users/gpg_keys/#list-your-gpg-keys\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getGpgKeys({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getGpgKeys({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getGpgKeys({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username/gpg_keys",
    "title": "getGpgKeysForUser",
    "name": "getGpgKeysForUser",
    "description": "<p>Lists the GPG keys for a user. This information is accessible by anyone. <a href=\"https://developer.github.com/v3/users/gpg_keys/#list-gpg-keys-for-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getGpgKeysForUser({username, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getGpgKeysForUser({username, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getGpgKeysForUser({username, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/installations/:installation_id/repositories",
    "title": "getInstallationRepos",
    "name": "getInstallationRepos",
    "description": "<p>List repositories that are accessible to the authenticated user for an installation.</p> <p>The access the user has to each repository is included in the hash under the <code>permissions</code> key. <a href=\"https://developer.github.com/v3/apps/installations/#list-repositories-accessible-to-the-user-for-an-installation\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getInstallationRepos({installation_id, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getInstallationRepos({installation_id, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getInstallationRepos({installation_id, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/installations",
    "title": "getInstallations",
    "name": "getInstallations",
    "description": "<p>List installations that are accessible to the authenticated user.</p> <p>The permissions the installation has are included under the <code>permissions</code> key. <a href=\"https://developer.github.com/v3/apps/#list-installations-for-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getInstallations({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getInstallations({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getInstallations({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/keys/:id",
    "title": "getKey",
    "name": "getKey",
    "description": "<p>View extended details for a single public key. Requires that you are authenticated via Basic Auth or via OAuth with at least <code>read:public_key</code> <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">scope</a>. <a href=\"https://developer.github.com/v3/users/keys/#get-a-single-public-key\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getKey({id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getKey({id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getKey({id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/keys",
    "title": "getKeys",
    "name": "getKeys",
    "description": "<p>Lists the current user's keys. Requires that you are authenticated via Basic Auth or via OAuth with at least <code>read:public_key</code> <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">scope</a>. <a href=\"https://developer.github.com/v3/users/keys/#list-your-public-keys\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getKeys({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getKeys({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getKeys({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:username/keys",
    "title": "getKeysForUser",
    "name": "getKeysForUser",
    "description": "<p>Lists the <em>verified</em> public keys for a user. This is accessible by anyone. <a href=\"https://developer.github.com/v3/users/keys/#list-public-keys-for-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getKeysForUser({username, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getKeysForUser({username, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getKeysForUser({username, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/marketplace_purchases",
    "title": "getMarketplacePurchases",
    "name": "getMarketplacePurchases",
    "description": "<p>Returns only active subscriptions. You need to authenticate this call with the user's OAuth token. <a href=\"https://developer.github.com/v3/apps/marketplace/#get-a-users-marketplace-purchases\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getMarketplacePurchases({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getMarketplacePurchases({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getMarketplacePurchases({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/marketplace_purchases/stubbed",
    "title": "getMarketplaceStubbedPurchases",
    "name": "getMarketplaceStubbedPurchases",
    "description": "<p>Returns only active subscriptions. You need to authenticate this call with the user's OAuth token. <a href=\"https://developer.github.com/v3/apps/marketplace/#get-a-users-marketplace-purchases\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getMarketplaceStubbedPurchases({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getMarketplaceStubbedPurchases({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getMarketplaceStubbedPurchases({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/memberships/orgs/:org",
    "title": "getOrgMembership",
    "name": "getOrgMembership",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/members/#get-your-organization-membership\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "org",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getOrgMembership({org})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getOrgMembership({org}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getOrgMembership({org}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/memberships/orgs",
    "title": "getOrgMemberships",
    "name": "getOrgMemberships",
    "description": "<p><a href=\"https://developer.github.com/v3/orgs/members/#list-your-organization-memberships\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "active",
              "pending"
            ],
            "optional": true,
            "field": "state",
            "description": "<p>Indicates the state of the memberships to return. Can be either <code>active</code> or <code>pending</code>. If not specified, the API returns both active and pending memberships.</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getOrgMemberships({state, per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getOrgMemberships({state, per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getOrgMemberships({state, per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/orgs",
    "title": "getOrgs",
    "name": "getOrgs",
    "description": "<p>List organizations for the authenticated user. <em>OAuth scope requirements</em>*</p> <p>This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with <code>read:org</code> scope, you can publicize your organization membership with <code>user</code> scope, etc.). Therefore, this API requires at least <code>user</code> or <code>read:org</code> scope. OAuth requests with insufficient scope receive a <code>403 Forbidden</code> response. <a href=\"https://developer.github.com/v3/orgs/#list-your-organizations\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getOrgs({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getOrgs({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getOrgs({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/public_emails",
    "title": "getPublicEmails",
    "name": "getPublicEmails",
    "description": "<p>Lists your publicly visible email address, which you can set with the <a href=\"#toggle-primary-email-visibility\">Toggle primary email visibility</a> endpoint. This endpoint is accessible with the <code>user:email</code> scope. <a href=\"https://developer.github.com/v3/users/emails/#list-public-email-addresses-for-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getPublicEmails({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getPublicEmails({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getPublicEmails({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/repository_invitations",
    "title": "getRepoInvites",
    "name": "getRepoInvites",
    "description": "<p>When authenticating as a user, this endpoint will list all currently open repository invitations for that user.</p> <p><a href=\"https://developer.github.com/v3/repos/invitations/#list-a-users-repository-invitations\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getRepoInvites({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getRepoInvites({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getRepoInvites({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/teams",
    "title": "getTeams",
    "name": "getTeams",
    "description": "<p>List all of the teams across all of the organizations to which the authenticated user belongs. This method requires <code>user</code>, <code>repo</code>, or <code>read:org</code> <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/\">scope</a> when authenticating via <a href=\"https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/\">OAuth</a>. <a href=\"https://developer.github.com/v3/teams/#list-user-teams\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "per_page",
            "defaultValue": "30",
            "description": "<p>Results per page (max 100)</p>"
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number of the results to fetch.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.getTeams({per_page, page})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.getTeams({per_page, page}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.getTeams({per_page, page}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/installations/:installation_id/repositories/:repository_id",
    "title": "removeRepoFromInstallation",
    "name": "removeRepoFromInstallation",
    "description": "<p>Remove a single repository from an installation.</p> <p>The authenticated user must have admin access to the repository. <a href=\"https://developer.github.com/v3/apps/installations/#remove-repository-from-installation\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "installation_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "repository_id",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.removeRepoFromInstallation({installation_id, repository_id})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.removeRepoFromInstallation({installation_id, repository_id}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.removeRepoFromInstallation({installation_id, repository_id}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PATCH",
    "url": "/user/email/visibility",
    "title": "togglePrimaryEmailVisibility",
    "name": "togglePrimaryEmailVisibility",
    "description": "<p>Sets the visibility for your primary email addresses. <a href=\"https://developer.github.com/v3/users/emails/#toggle-primary-email-visibility\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Specify the <em>primary</em> email address that needs a visibility change.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "visibility",
            "description": "<p>Use <code>public</code> to enable an authenticated user to view the specified email address, or use <code>private</code> so this primary email address cannot be seen publicly.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.togglePrimaryEmailVisibility({email, visibility})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.togglePrimaryEmailVisibility({email, visibility}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.togglePrimaryEmailVisibility({email, visibility}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/blocks/:username",
    "title": "unblockUser",
    "name": "unblockUser",
    "description": "<p><a href=\"https://developer.github.com/v3/users/blocking/#unblock-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.unblockUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.unblockUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.unblockUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "DELETE",
    "url": "/user/following/:username",
    "title": "unfollowUser",
    "name": "unfollowUser",
    "description": "<p>Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the <code>user:follow</code> scope. <a href=\"https://developer.github.com/v3/users/followers/#unfollow-a-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.unfollowUser({username})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.unfollowUser({username}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.unfollowUser({username}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  },
  {
    "type": "PATCH",
    "url": "/user",
    "title": "update",
    "name": "update",
    "description": "<p><strong>Note:</strong> If your email is set to private and you send an <code>email</code> parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API. <a href=\"https://developer.github.com/v3/users/#update-the-authenticated-user\">REST API doc</a></p>",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>The new name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>The publicly visible email address of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "blog",
            "description": "<p>The new blog URL of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "company",
            "description": "<p>The new company of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "location",
            "description": "<p>The new location of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "hireable",
            "description": "<p>The new hiring availability of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "bio",
            "description": "<p>The new short biography of the user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "async/await",
        "content": "const result = await octokit.users.update({name, email, blog, company, location, hireable, bio})",
        "type": "js"
      },
      {
        "title": "Promise",
        "content": "octokit.users.update({name, email, blog, company, location, hireable, bio}).then(result => {})",
        "type": "js"
      },
      {
        "title": "Callback",
        "content": "octokit.users.update({name, email, blog, company, location, hireable, bio}, (error, result) => {})",
        "type": "js"
      }
    ],
    "version": "0.0.0",
    "filename": "doc/apidoc.js",
    "groupTitle": "Users"
  }
] });
