# gather
Objective: Gather is to be a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The app will use the Google
Calendar API to fetch upcoming events.


FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
Scenario 1: An event element is collapsed by default.
Scenario 2: User can expand an event to see its details.
Scenario 3: User can collapse an event to hide its details.

  As a user, I should be able to show or hide the details of an event so that I can browse the site more easily.
    1.	Given: The user hasn’t clicked/asked for an event’s details
    When: The user opens an event
    Then: The event details are collapsed
    2.	Given: The user clicked on an event to see details
    When: The user clicks
    Then: The event details will expand
    3.	Given: The user clicked on the event to hide details
    When: The user clicks
    Then: The event details will collapse

FEATURE 3: SPECIFY NUMBER OF EVENTS
Scenario 1: When user hasn’t specified a number, 32 is the default number.
Scenario 2: User can change the number of events they want to see.

  Feature 3: As a user, I should be able to indicate a number of events in my view of the meet app so that I can either expand or limit my options.
    1.	Given: The user hasn’t indicated how many events to view
    When: The user opens the app
    Then: The user should see a list of 32 events by default
    2.	Given: The user clicked on an event to see details
    When: The user clicks
    Then: The event details are expanded

FEATURE 4: USE THE APP WHEN OFFLINE
Scenario 1: Show cached data when there’s no internet connection.
Scenario 2: Show error when user changes the settings (city, time range).

  Feature 4: As a user, I should be able to access events when I’m offline so that I can navigate the app and its data without interruption.
    1.	Given: The app has previously been loaded while online
    When: The user is offline
    Then: The events and details are still available
    2.	Given: The app was previously loaded with particular settings
    When: The user changes settings
    Then: An error message will be shown

FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city.

  Feature 5: As a user, I should be able to visualize the data/events in multiple ways so that I can more easily access the information.
    1.	Given: A city and time range were specified
    When: The user chooses a chart view
    Then: The events are plotted in a chart
