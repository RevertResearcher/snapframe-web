export default function SocialLinks() {
    return (
        <div className="flex items-center gap-3">
            <a
                href="https://instagram.com/indy.rn"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-3 py-1 text-sm text-sf-accent"
            >
                Instagram @indy.rn
            </a>

            <a
                href="https://wa.me/6282174996877"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white"
            >
                WhatsApp
            </a>
        </div>
    )
}