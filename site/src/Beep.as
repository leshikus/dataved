package
{
	import flash.media.SoundChannel;
	import flash.media.Sound;
	
	public class Beep extends Object
	{
		[Embed(source="sounds/beep-9.mp3")]
		
		[Bindable]
		
		private var soundcls:Class;
		
		private var soundmp3:Sound = new soundcls() as Sound;
		
		private var soundchannel:SoundChannel;
		
		public function play():void 
		{
			soundchannel=soundmp3.play();
		}
	}
}