package
{
	import flash.net.NetConnection;
	import flash.net.NetStream;
	
	import mx.controls.VideoDisplay;
	
	public class CustomNetStream extends NetStream
	{
		// size of video
		private const DISPLAY_WIDTH:Number = 115;
		private const DISPLAY_HEIGHT:Number = 120;

		private var _isPublished:Boolean = false;
		private var _neighborID:String;
		// mx control that play this stream
		private var _videoDisplay:mx.controls.VideoDisplay;
		
		public function CustomNetStream(connection:NetConnection, peerID:String="connectToFMS")
		{
			super(connection, peerID);
		}
		
		public function set Published(value:Boolean):void
		{
			_isPublished = value;
		}
		
		public function get Published():Boolean
		{
			return _isPublished;
		}
		
		public function set NeighborID(neighborID:String):void
		{
			_neighborID = neighborID;
		}
		
		public function get NeighborID():String
		{
			return _neighborID;
		}
		
		public function set VideoDisplay(videoDisplay:mx.controls.VideoDisplay):void
		{
			_videoDisplay = videoDisplay;
			if (_videoDisplay)
			{
				_videoDisplay.width = DISPLAY_WIDTH;
				_videoDisplay.height = DISPLAY_HEIGHT;
			}
		}
		
		public function get VideoDisplay():mx.controls.VideoDisplay
		{
			return _videoDisplay;
		}
		
	}
}