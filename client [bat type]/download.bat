@echo off
@title Downloader
@cls

Echo Make sure you've changed your server route link at 26 line
Echo Warning: All your downloaded video/audio will be saved at C:\Downloaded
timeout 5
cls
goto begin

:begin
set /p id=Link to your video from youtube: 
goto start

:start
if not exist "C:\Downloaded\" (
  mkdir "C:\Downloaded\"
  if "!errorlevel!" EQU "0" (
    echo Folder created successfully
  ) else (
    echo Error while creating folder
  )
) else (
  echo Folder already exists, Downloading into it!
  cd C:\Downloaded
  curl https://example.com/mp3?URL=%id% -o song.mp3
  Echo Done
  timeout 3
  cls
  goto begin
)
