# MoodMap

❗ This is currently only saving data using the local storage of the browser/device on which the site viewed on. After clearing browser data everything will be lost.

✔ What already works:

- Tracking mood and notes for every day and viewing a summary for the current month

Try it here: https://timschilling.net/moodmap/

## Next steps:

- Make menu focusable
- Make whole option element clickable on the Today page as on Options page
- Save active page state
- Make mood selector close when clicking outside (usability issue when choosing the already active option)
- Make mood statistics clickable and show notes and other data

## Later

- Option to save in account instead of local storage
- Refresh today page when date changes (probable error: overwriting save data with data from yesterday because of useEffect firing first)
