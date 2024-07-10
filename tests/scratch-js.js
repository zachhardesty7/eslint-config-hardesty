/**
 * @param {string} [message]
 * @returns {never}
 */
function throwError(message) {
  throw new Error(message)
}

/** @returns {RawHistoryData} */
function getWatchHistory() {
  /** @type {RawHistoryData} */
  const videosData = []
  const dateBlocks = document.querySelectorAll("ytd-item-section-renderer")

  for (const dateBlock of dateBlocks) {
    const date = dateBlock.querySelector("#header")?.textContent?.trim() ?? throwError()
    const videos = dateBlock.querySelectorAll("ytd-video-renderer")
    for (const video of videos) {
      const title =
        video.querySelector("#video-title")?.textContent?.trim() ?? throwError()
      const url =
        /** @type {HTMLAnchorElement | null} */ (video.querySelector("#video-title"))
          ?.href ?? throwError()
      const duration =
        video
          .querySelector("ytd-thumbnail-overlay-time-status-renderer #time-status")
          ?.textContent?.trim() ?? throwError()
      const channel =
        video
          .querySelector("yt-formatted-string.ytd-channel-name")
          ?.textContent?.trim() ?? throwError()
      videosData.push({ date, title, url, duration, channel })
    }
  }

  return videosData
}

async function main() {
  const rawData = getWatchHistory()
  try {
    // @ts-expect-error
    copy(rawData)
  } catch (_) {}
}

main()
