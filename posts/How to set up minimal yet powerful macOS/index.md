---
title: "How to set up minimal yet powerful macOS"
time: "2021-01-09T00:54:25.27"
image: "./image.jpeg"
topics: ["How to", "Coding", "Environment"]
---

## Reset disk

Boot into the recovery mode by `Cmd + R`

Disk Utility > View > Show All Devices > APPLE SSD(...) > Erase > (Use the default settings) > Erase

Reinstall macOS

## Set OS

### Update software

System Preferences > Software Update

### Set System Preferences

### Set Finder Preferences

### Simlify dock

### Get software

XCode

Brew

```sh
brew cask
```

### Disable PressAndHold

```sh
defaults write -globalDomain ApplePressAndHoldEnabled -bool false
```

### Set environment
