# HadithScraper

This project scrapes hadith from websites given below.

1. shamela.ws

    saveWebsiteShamela.js was used to save the following books.

    1. 29120 - Musnad Imam Abu Hanifa
    2. 25794 - Musnad Imam Ahmad ibn Hanbal
    3. 735 - Sahih Al Bukhari

2. sunnipath

    saveWebsiteSunnipath.js was used to save the follwoing book.

    1. bukharibewley - Sahih Al Bukhari english translation by Ustadha Aisha Bewley

## Scraping scripts

Each folder contains certain scripts to scrape the data. The scripts are mostly the same but may contain minor tweaks for individual books. These scripts are

1. {FolderName}/00-GetChapterNamesAndPages.py - To get a map of ChapterName and Page Number. This is used later to partition the hadith into specific chapter.
2. {FolderName}/01-GetChaptersText.py - To get all the data for each chapter.
3. {FolderName}/02-GetAhadith.py - To get all individual ahadtih in a txt format and create info.json which contains the hadithNumber and chapter mapping details. 
